import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './HousesPage.scss';
import NavComponent from '../../Components/NavComponent/NavComponent';
import SearchComponent from '../../Components/SearchComponent/SearchComponent';

import GalleryComponentHouses from '../../Components/GalleryComponentsHouses/GalleryComponentHouses';
const HousesPage = () => {

    const [localHouses, setlocalHouses] = useState([]);
    useEffect(() => {
        fetch('https://api.got.show/api/show/houses/')
            .then(res => res.json())
            .then(res => setlocalHouses(res))
    }, [])


    return (


        <div>
            <SearchComponent />
            <GalleryComponentHouses infoHouses={localHouses} />
            <div className="nav-container" >
                <NavComponent />
            </div>

        </div>


    );
}

export default HousesPage;