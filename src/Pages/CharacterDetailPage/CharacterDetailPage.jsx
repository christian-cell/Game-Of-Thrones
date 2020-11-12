import React, { useEffect, useState, useHistory } from 'react';
import axios from "axios"; import { useParams } from 'react-router-dom';
import CharacterItem from '../../Components/CharacterItem/CharacterItem';
import BackComponent from '../../Components/BackComponent/BackComponent';
import SearchComponent from '../../Components/SearchComponent/SearchComponent';

export default function CharacterDetailPage() {
    const [character, setCharacter] = useState({});
    const [houseDetail, setHouseDetail] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const name = useParams().name;

    // const house = useParams().house;

    // const personaje = "Catelyn%20Stark"

    useEffect(() => {
        fetch('https://api.got.show/api/show/characters/' + name)
            .then(res => res.json())
            .then(res => { /* setCharacter(res.data.name) ; */
                const filter = res
                setFilteredItems(filter);
                setCharacter(filter);
                fetch('https://api.got.show/api/show/houses/' + res.house)
                    .then(res => res.json())
                    .then(res => setHouseDetail(res[0]));

            })

    }, [])
    const filterItems = (filterValues) => {
        const filteredLocalItems = [];
        for (const item of character) {
            if (item.name.includes(filterValues)) {
                filteredLocalItems.push(item)
            }
        }
    }

    // console.log(character)
    console.log(houseDetail)




    // const history = useHistory();   
    // const goBackToCharacterPage = () =>  {    
    //     history.push('/characters');
    // }


    return (
        <div style={{ background: 'black' }} >
            <SearchComponent fnFilterItems={filterItems} />
            {/* <BackComponent /> */}
            <CharacterItem infoHouseDetail={houseDetail} character={character} />


        </div>
    )
}
// onclick={goBackToCharacterPage}
