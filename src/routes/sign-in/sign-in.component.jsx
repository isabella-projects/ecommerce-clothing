import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignButton from '../../components/sign-button/sign-button.component';
import SignUpForm from '../../components/sign-form/sign-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            console.log(user);

            const userDocRef = await createUserDocumentFromAuth(user);
            console.log(userDocRef);
        } catch (error) {
            console.error('Error has occured during google login session: ', error);
        }
    };

    return (
        <>
            <SignButton signIn={logGoogleUser} buttonText="Login with Google Popup" />
            <SignUpForm />
        </>
    );
};

export default SignIn;
