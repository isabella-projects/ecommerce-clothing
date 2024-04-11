import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignCard from "../../components/sign-card/sign-card.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            console.log(user);

            const userDocRef = await createUserDocumentFromAuth(user);
            console.log(userDocRef);
        } catch (error) {
            console.error(
                "Error has occured during google login session: ",
                error
            );
        }
    };

    return (
        <>
            <SignCard onGoogleSignIn={logGoogleUser} />
        </>
    );
};

export default SignIn;
