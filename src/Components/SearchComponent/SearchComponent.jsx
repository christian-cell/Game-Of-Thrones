import React from 'react';
import './SearchComponent.scss';
import LanguagesComponent from '../../Components/LanguagesComponent/LanguagesComponent';
import { useForm } from "react-hook-form";
import HomeComponent from '../../Components/HomeComponent/HomeComponent';

const SearchComponent = (props) => {

    const { searcher, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => props.fnFilterItems(data);



    return (
        <div className="search_container">
            <div className="search_icon">

                <span className="fas fa-search"> </span>
            </div>
            {/* <form onSubmit action=""> */}


            <div className="search_input">
                <input className="input_s" type="text" placeholder="Buscar" />
            </div>

            {/* </form> */}
            <div className = "home-container" >
                <HomeComponent />
            </div>
            <LanguagesComponent />

        </div>
    );
}

export default SearchComponent;