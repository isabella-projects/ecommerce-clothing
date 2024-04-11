import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('This E-Mail is already in use!');
            } else {
                console.log('User creation encountered an error: ', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <>
            <h1>Sign Up with your E-Mail and Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label htmlFor="">E-Mail</label>
                <input type="email" required onChange={handleChange} autoComplete="email" name="email" value={email} />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    autoComplete="new-password"
                    name="password"
                    value={password}
                />

                <label htmlFor="">Confirm Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    autoComplete="new-password"
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUpForm;
