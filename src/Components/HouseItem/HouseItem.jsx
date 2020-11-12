import React from "react";
import "./HouseItem.scss";

export default function HouseItem(props) {
  const houseDetail = props.houseDetail;

  return (
    <div className="padre">
      <div >
        <div >{houseDetail.logoURL && <img src={houseDetail.logoURL} alt="" />}</div>
        <div className="padre__houseName">{houseDetail.name && <h4>{houseDetail.name}</h4>}</div>
      </div>
      
      <div className="main-container">
          <div className="main-container__contenedor">
              <h3>LEMA</h3>
              <p>
              {houseDetail.sigil}
              </p>
                
          </div>
          <div className="main-container__contenedor">
              <h3>SEDE</h3>
              <p>{houseDetail.seat}</p>
          </div>
          <div className="main-container__contenedor">
              <h3>REGION</h3>
              <p>
              {houseDetail.region}
            </p>
          </div> 
           <div className="main-container__contenedor">
              <h3>ALIANZAS</h3>
              <p>
                {houseDetail.allegiance}
              </p>
          </div>
          <div className="main-container__contenedor">
              <h3>RELIGIONES</h3>
              <p>{houseDetail.religion}</p>
          </div>
          <div className="main-container__contenedor">
              <h3>FUNDACION</h3>
              <p>{houseDetail.createdAt}</p>
          </div>

      </div>
    </div>
  );
}
