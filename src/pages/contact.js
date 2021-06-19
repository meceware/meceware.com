import React, { Fragment } from 'react';
import classNames from 'classnames';
import superagent from 'superagent';

/* SEO */
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';

export default class Contact extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      formValidated: false,
      messageSending: false,
      messageSent: false,
      messageError: '',
    };

    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleSubmit( e ) {
    e.preventDefault();

    const checkEmail = ( val ) => {
      const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test( String( val ).toLowerCase() );
    };

    const contactForm = document.getElementById( 'contact-form' );
    const inputs = contactForm.querySelectorAll( 'input' );
    let validated = true;

    this.setState( {
      formValidated: false,
      messageSending: false,
    } );

    // Validate inputs
    for ( const input of inputs ) {
      const inputVal = input.value ? input.value.trim() : '';
      if ( ! input.hasAttribute( 'data-validate' ) ) {
        if ( inputVal !== '' ) {
          validated = false;
          break;
        }
      } else {
        let isValid = false;

        if ( input.type === 'text' ) {
          isValid = inputVal !== '' && inputVal.length > 3;
        } else if ( input.type === 'email' ) {
          isValid = checkEmail( inputVal );
        }

        if ( isValid ) {
          input.parentElement.querySelector( '.form-error' ).classList.add( 'hidden' );
        } else {
          input.parentElement.querySelector( '.form-error' ).classList.remove( 'hidden' );
        }

        validated = validated && isValid;
      }
    }

    const texts = contactForm.querySelectorAll( 'textarea' );
    for ( const text of texts ) {
      const textVal = text.value ? text.value.trim() : '';
      if ( ! text.hasAttribute( 'data-validate' ) ) {
        if ( textVal !== '' ) {
          validated = false;
          break;
        }
      } else {
        const isValid = textVal !== '' && textVal.length > 6;

        if ( isValid ) {
          text.parentElement.querySelector( '.form-error' ).classList.add( 'hidden' );
        } else {
          text.parentElement.querySelector( '.form-error' ).classList.remove( 'hidden' );
        }

        validated = validated && isValid;
      }
    }

    this.setState( {
      formValidated: validated,
    } );

    if ( ! validated ) {
      return;
    }

    this.setState( {
      messageSending: true,
    } );

    const data = {};
    for ( let i = 0; i < contactForm.length; ++i ) {
      if ( contactForm[ i ].name ) {
        data[ contactForm[ i ].name ] = contactForm[ i ].value;
      }
    }

    superagent
      .post( '/forms/index.php' )
      .send( data ) // sends a JSON post body
      .accept( 'application/json' )
      .type( 'application/json' )
      .end( ( err, res ) => {
        this.setState( {
          messageSending: false,
        } );
        if ( ! res.body || ! err ) {
          this.setState( {
            messageSent: false,
            messageError: 'Sometimes, something happens and nothing happens!',
          } );
        } else if ( res.body && res.body.result === 'error' ) {
          this.setState( {
            messageSent: false,
            messageError: res.body.message,
          } );
        } else if ( err ) {
          this.setState( {
            messageSent: false,
            messageError: 'Sometimes, something happens and nothing happens!',
          } );
        } else {
          this.setState( {
            messageSent: true,
            messageError: '',
          } );
        }
      } );
  }

  render() {
    return (
      <Fragment>
        <SEO
          title = 'Contact'
          description = 'Get in touch!'
        />
        <Layout>
          <Section>
            <div className = 'p-1 sm:px-6 lg:px-48 w-full flex justify-center'>
              <div className = 'w-full sm:w-3/4 xl:w-1/2 lg: bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
                { ( ! this.state.formValidated || this.state.messageSending ) && (
                  <form id = 'contact-form' onSubmit = { this.handleSubmit }>
                    <div className = 'mb-4'>
                      <label className = 'block uppercase text-gray-700 text-xs font-bold m-2' htmlFor = 'name'>
                        Name
                      </label>
                      <input name = 'name' type = 'text' placeholder = 'Your Name' data-validate className = 'appearance-none outline-none block w-full bg-gray-100 text-grey-darker border border-blue-300 focus:border-blue-500 rounded py-3 px-4 mb-1 transition duration-500 ease-in-out transform' />
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>Please fill out this field.</p>
                    </div>
                    <div className = 'hidden mb-4'>
                      <label className = 'block uppercase text-gray-700 text-xs font-bold m-2' htmlFor = 'email'>
                        Email
                      </label>
                      <input name = 'email' type = 'email' placeholder = 'Your Email' className = 'appearance-none outline-none block w-full bg-gray-100 text-grey-darker border border-blue-300 focus:border-blue-500 rounded py-3 px-4 mb-1 transition duration-500 ease-in-out transform' />
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>Please fill out this field.</p>
                    </div>
                    <div className = 'mb-4'>
                      <label className = 'block uppercase text-gray-700 text-xs font-bold m-2' htmlFor = 'byg4rv4f'>
                        Email
                      </label>
                      <input name = 'byg4rv4f' type = 'email' placeholder = 'Your Email' data-validate className = 'appearance-none outline-none block w-full bg-gray-100 text-grey-darker border border-blue-300 focus:border-blue-500 rounded py-3 px-4 mb-1 transition duration-500 ease-in-out transform' />
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>Please fill out this field.</p>
                    </div>
                    <div className = 'hidden mb-4'>
                      <label className = 'block uppercase text-gray-700 text-xs font-bold m-2' htmlFor = 'message'>
                        Message
                      </label>
                      <textarea name = 'message' multiline = 'true' placeholder = 'Message...' rows = '4' className = 'appearance-none outline-none block w-full bg-gray-100 text-grey-darker border border-blue-300 focus:border-blue-500 rounded py-3 px-4 mb-1 transition duration-500 ease-in-out transform'></textarea>
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>Please fill out this field.</p>
                    </div>
                    <div className = 'mb-4'>
                      <label className = 'block uppercase text-gray-700 text-xs font-bold m-2' htmlFor = 'odtbnreo'>
                        Message
                      </label>
                      <textarea name = 'odtbnreo' multiline = 'true' placeholder = 'Message...' rows = '4' data-validate className = 'appearance-none outline-none block w-full bg-gray-100 text-grey-darker border border-blue-300 focus:border-blue-500 rounded py-3 px-4 mb-1 transition duration-500 ease-in-out transform'></textarea>
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>Please fill out this field.</p>
                    </div>
                    <div className = 'block'>
                      <button
                        type = 'submit'
                        className = { classNames(
                          'uppercase select-none bg-blue-500 focus:ring focus:outline-none text-white text-xs font-bold py-3 px-10 rounded transform transition-background duration-500 ease-in-out',
                          {
                            'hover:bg-blue-700': ! this.state.messageSending,
                            'opacity-50 cursor-default': this.state.messageSending,
                          },
                        ) }
                        disabled = { this.state.messageSending ? true : false }
                      >
                        { this.state.messageSending ? 'Sending...' : 'Send' }
                      </button>
                      <p className = 'hidden form-error text-red-500 text-xs italic mx-2 mb-1'>An Error occured!</p>
                    </div>
                  </form>
                ) }
                { this.state.formValidated && ! this.state.messageSending && this.state.messageSent && (
                  <div className = 'p-8 m-8 text-center'>
                    <p className = 'text-green-500 font-bold text-4xl'>Message Sent!</p>
                  </div>
                ) }
                { this.state.formValidated && ! this.state.messageSending && ! this.state.messageSent && (
                  <div className = 'p-8 m-8 text-center'>
                    <p className = 'text-red-500 font-bold text-2xl mb-2'>Message NOT Sent!</p>
                    <p className = 'text-red-500 font-bold text-base border-t border-red-500 pt-2'>{ this.state.messageError }</p>
                    <button
                      className = { classNames(
                        'uppercase select-none bg-blue-500 focus:ring focus:outline-none text-white text-xs font-bold py-3 px-10 rounded mt-4 transform transition-background duration-500 ease-in-out',
                        {
                          'hover:bg-blue-700': ! this.state.messageSending,
                          'opacity-50 cursor-default': this.state.messageSending,
                        },
                      ) }
                      onClick = { () => {
                        this.setState( {
                          formValidated: false,
                        } );
                      } }
                    >
                      Try Again?
                    </button>
                  </div>
                ) }
              </div>
            </div>
          </Section>
        </Layout>
      </Fragment>
    );
  }
}
