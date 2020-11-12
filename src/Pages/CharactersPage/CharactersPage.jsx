import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import HomeComponent from '../../Components/HomeComponent/HomeComponent';
import './CharactersPage.scss';
import SearchComponent from '../../Components/SearchComponent/SearchComponent';

import GalleryComponent from '../../Components/GalleryComponent/GalleryComponent';

import NavComponent from '../../Components/NavComponent/NavComponent'

const CharactersPage = () => {

    const [localCharacters, setlocalCharacter] = useState([]);

    // const [filteredItems, setFilteredItems] = useState([]);
    useEffect(() => {
        fetch('https://api.got.show/api/show/characters/')
            .then(res => res.json())

            .then(res =>

                setlocalCharacter(res),


            )
    })

    return (


        <div className="character-main-container" >
            <SearchComponent />



            <div  >
                <div className="character-main-container" >
                    <GalleryComponent infoCharacters={localCharacters} />
                </div>

            </div>
            <div className="nav-container" >
                <NavComponent />

            </div>
        </div>

    );
}

export default CharactersPage;