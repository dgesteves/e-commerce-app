import React, {useState} from 'react';

import './sign-up.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFormSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('Passwords Don\'t Match');
    }

    try {

      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (e) {
      console.error(e);
    }
    console.log(displayName, email, password, confirmPassword);
  };

  return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form
            className='sign-up-form'
            onSubmit={onFormSubmit}
        >
          <FormInput
              type='text'
              value={displayName}
              handleChange={e => setDisplayName(e.target.value)}
              label='Display Name'
              required
          />
          <FormInput
              type='email'
              value={email}
              handleChange={e => setEmail(e.target.value)}
              label='Email'
              required
          />
          <FormInput
              type='password'
              value={password}
              handleChange={e => setPassword(e.target.value)}
              label='Password'
              required
          />
          <FormInput
              type='password'
              value={confirmPassword}
              handleChange={e => setConfirmPassword(e.target.value)}
              label='Confirm Password'
              required
          />
          <CustomButton type='submit'>
            Sign Up
          </CustomButton>
        </form>
      </div>
  );
};

export default SignUp;