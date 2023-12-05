import "./sign-card.styles.scss";

const SignCard = ({ onGoogleSignIn }) => {
    return (
        <div className="card-container">
            <button className="btn-google" onClick={onGoogleSignIn}>
                Login with Google
            </button>
        </div>
    );
};

export default SignCard;
