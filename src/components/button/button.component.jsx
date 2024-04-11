import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
    const buttonClass = buttonType ? ` ${BUTTON_TYPE_CLASSES[buttonType]}` : '';
    return (
        <button className={`button-container${buttonClass}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
