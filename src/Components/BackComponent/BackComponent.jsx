import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LeftArrow from './assets/left-arrow.png'


export default function BackComponent () {

    // función para asignarla en el back component de houses detail
   
    const history = useHistory();
    const goBackToHousesPage = () => {
      history.push("houses/");
    };

    return(
        {/* <div>
            <img src={LeftArrow}>Volver</img>
        </div> */}
    )
}
{/* <i class="far fa-long-arrow-left"></i> */}