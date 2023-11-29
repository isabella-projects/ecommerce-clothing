import { Outlet, Link } from "react-router-dom";

// import CrwnLogo from "../../assets/img/crown.svg?react";

import "./navigation.styles.scss";
import firmLogo from "../../assets/img/perfect-color.jpg";

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={firmLogo} alt="Firm Logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
