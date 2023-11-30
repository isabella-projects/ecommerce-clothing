import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            console.log(user);
            createUserDocumentFromAuth(user);
        } catch (error) {
            console.error("Error has occured during login session: ", error);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;
