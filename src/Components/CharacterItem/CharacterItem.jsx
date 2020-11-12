import React from "react";
import './CharacterItem.scss';
export default function CharacterItem(props) {
  const characterDetail = props.character;
  const houseDetail = props.infoHouseDetail;
  return (
    <div className="padre" >

      <div>
        {characterDetail.image && <img style={{ width: '200px', height: '300px', marginTop: '30px' }} src={characterDetail.image} alt="" />}
      </div>
      <div>
        {characterDetail.name && <h3 className="titulo" >{characterDetail.name}</h3>}
      </div>
      <div className="main-container" >



        <div className="main-container">
          {/* <div>
          <h3 className="main-container__titulo">ESCUDO</h3>
          {houseDetail.logoURL && <img src={houseDetail.logoURL} />}
          </div> */}

          <div>

            <img className="imgHouse" src={houseDetail.logoURL} alt="" />


          </div>

          <div className="main-container__contenedor">
            <h3 className="main-container__titulo">ALIANZAS</h3>
            <ul className="main-container__ul">
              {characterDetail.allegiances &&
                characterDetail.allegiances.map((item, i) => <li> {item} </li>)}
            </ul>
          </div>

          <div >
            <h3 className="main-container__titulo">APARICIONES</h3>
            <div className="main-container__contenedor scroll" >
              <ul className="main-container__ul">
                {characterDetail.appearances &&
                  characterDetail.appearances.map((item, i) => <li> {item} </li>)}
              </ul>
            </div>
          </div>

          <div className="main-container__contenedor">
            <h3 className="main-container__titulo">Padre</h3>
            {characterDetail.name && <h4>{characterDetail.name}</h4>}
          </div>

          <div className="main-container__contenedor">
            <h3 className="main-container__titulo">Descendientes</h3>
            <ul className="main-container__ul">
              {characterDetail.siblings &&
                characterDetail.siblings.map((item, i) => <li> {item} </li>)}
            </ul>
          </div>

          <div >
            <h3 className="main-container__titulo">Titulos</h3>
            <div className="main-container__contenedor scroll" >
              <ul className="main-container__ul">
                {characterDetail.titles &&
                  characterDetail.titles.map((item, i) => <li> {item} </li>)}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

{
  /* <div>                
             <div>                    
             
             <h3>CASA</h3>                   
              <img src="" />                
            </div>
            <div>
                              
            </div>
                                  
                 <div>                    
                                    
                 <ul>
                    </ul>               
                     </div>               
                      <div>                   
                       <h3>PADRE</h3>                    
                       <p>{characterDetail.father}</p>                
                       </div>                
                       <div>                  
                         <h3>DESCENDIENTES</h3>                   
                          <ul></ul>                
                          </div>               
                           <div>                
                               <h3>TÍTULOS</h3>               
                                    <ul></ul>             
                                       </div>        
            </div> */
}
