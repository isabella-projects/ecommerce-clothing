import './sign-button.styles.scss';

const SignButton = ({ signIn, buttonText }) => {
    return (
        <>
            <h1>Sign In Page</h1>
            <button className="btn-google" onClick={signIn}>
                {buttonText}
            </button>
        </>
    );
};

export default SignButton;
