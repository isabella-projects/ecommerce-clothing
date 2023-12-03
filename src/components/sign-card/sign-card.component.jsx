import "./sign-card.styles.scss";

const SignCard = ({ onGoogleSignIn, onFacebookSignIn }) => {
    return (
        <div className="card-container">
            <button onClick={onGoogleSignIn}>Sign In with Google</button>
            <button onClick={onFacebookSignIn}>Sign In with Facebook</button>
        </div>
    );
};

export default SignCard;
