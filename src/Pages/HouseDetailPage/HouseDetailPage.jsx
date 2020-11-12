import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackComponent from "../../Components/BackComponent/BackComponent";
import GalleryComponentsHouses from "../../Components/GalleryComponentsHouses/GalleryComponentHouses";
import HouseItem from "../../Components/HouseItem/HouseItem";

export default function CharacterDetailPage() {
  const [houseDetail, setHouseDetail] = useState([]);

  const house = "House%20Baratheon";
  const name = useParams().name;

  useEffect(() => {
    fetch("https://api.got.show/api/show/houses/" + name)
      .then((res) => res.json())
      .then((res) => setHouseDetail(res[0]));
    console.log(houseDetail);
  }, []);

  /* useEffect(() => {
        fetch('https://api.got.show/api/show/houses/')
            .then(res => res.json())
            .then(res => setlocalHouses(res))
    }) */

  

  return (
    <div>
      <div>
        <span className="far fa-long-arrow-left">Volver</span>
      </div>{" "}
      <HouseItem houseDetail={houseDetail} />
    </div>
  );
}

// onclick={goBackToHousesPage}
