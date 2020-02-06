import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

//import { auth, signInWithGoogle } from '../../firebase/firebase.utilis';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setCredentials] = useState({email: '', password: ''});


/*
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
*/
    const { email, password } = userCredentials;

  // handleSubmit = async event => {
    const handleSubmit = async event => {
    event.preventDefault();
    //const { emailSignInStart } = this.props;
    //const { email, password } = this.state;
    //const { email, password } = userCredentials;

    emailSignInStart(email, password);
};

/*

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  */
  //};

  //handleChange = event => {
    const handleChange = event => {
    const { value, name } = event.target;

    //this.setState({ [name]: value });
     setCredentials({ ...userCredentials, [name]: value });

  };

  //render() {
    //const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
         <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick= {googleSignInStart} isGoogleSignIn> 
          {' '}
          Sign in with Google{' '}
          </CustomButton>
        </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
