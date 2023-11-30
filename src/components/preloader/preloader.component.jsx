import "./preloader.styles.scss";

const Preloader = () => {
    return (
        <div className="preloader">
            <span className="loader">
                <img
                    src="../../assets/img/logo-preloader.png"
                    alt="Preloader Logo"
                />
            </span>
        </div>
    );
};

export default Preloader;
