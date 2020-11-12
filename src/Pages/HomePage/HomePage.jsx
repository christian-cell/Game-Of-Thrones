import React from 'react'
import NavComponent from '../../Components/NavComponent/NavComponent';
import './HomePage.scss';
import LanguagesComponent from '../../Components/LanguagesComponent/LanguagesComponent'

export default function HomePage() {
    return (
        <div className="Inicio" >

            <div className="language-container" >
                <LanguagesComponent />
            </div>

            <div className="Inicio__rutas" >

                <div className="nav" >

                    <NavComponent />
                </div>
            </div>
        </div>
    )
}
