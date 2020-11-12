import React from 'react';
import './NavComponent.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function NavComponent() {

    const [t, i18n] = useTranslation("global")

    return (
        <div className="main-container" >
            <nav >
                <ul className="c-nav" >
                    <li className="c-nav__link" >
                        <Link className="link" to="/Characters" >

                            {t("Nav.characters")}

                        </Link>
                    </li  >
                    <li className="c-nav__link" >
                        <Link className="link" to="/Houses" >

                            {t("Nav.houses")}

                        </Link>
                    </li>
                    <li className="c-nav__link" >
                        <Link className="link" to="/Chronology" >

                            {t("Nav.chronology")}


                        </Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}
