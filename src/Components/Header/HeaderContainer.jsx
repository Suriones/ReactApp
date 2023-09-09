import React from "react";
import { NavLink } from "react-router-dom";
import header_style from "./Header.scss"
import Header from "./Header";

const HeaderContainer = React.memo((props) => {

    let authBlockHeader = <div></div>;

    if (props.authData.authStatus === true) {
        authBlockHeader =
            <div className={header_style.header}>
                <div className={header_style.username}>
                    Username: {props.authData.login}
                </div>
            </div>
    } else {
        authBlockHeader =
            <div className={header_style.header}>
                <div className={header_style.header_button}>
                    <NavLink to="/login" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Увійти</NavLink>
                </div>
                <div className={header_style.header_button}>
                    <NavLink to="/register" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Реєстрація</NavLink>
                </div>

            </div>
    }

    return (<Header authBlockHeader={authBlockHeader} />);
})

export default HeaderContainer;