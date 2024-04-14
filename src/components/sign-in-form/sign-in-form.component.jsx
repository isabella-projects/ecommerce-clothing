import { useState } from 'react';

import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.error('Error has occured during google login session: ', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Wrong credentials!');
            } else {
                console.log('User login error: ', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your E-Mail and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="E-Mail"
                    type="email"
                    required
                    onChange={handleChange}
                    autoComplete="email"
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    autoComplete="new-password"
                    name="password"
                    value={password}
                />
                <Button type="submit">Sign In</Button>
                <span className="choose">OR</span>

                <Button type="button" buttonType="google" onClick={signInWithGoogle}>
                    Sign In with Google
                </Button>
            </form>
        </div>
    );
};

export default SignInForm;
