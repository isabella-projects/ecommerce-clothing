import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignCard from "../../components/sign-card/sign-card.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user);
        } catch (error) {
            console.error("Error has occured during login session: ", error);
        }
    };

    return (
        <>
            <SignCard onGoogleSignIn={logGoogleUser} />
        </>
    );
};

export default SignIn;
