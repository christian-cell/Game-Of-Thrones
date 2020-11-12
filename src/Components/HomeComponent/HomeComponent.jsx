import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './HomeComponent.scss';

 
export default function HomeComponent(){
 
    const history = useHistory();

    const goToHomePage = () => 
        history.push('/');
 
    return(
        <div className = "icon-container" >
             <span className="icon fas fa-home" onClick = {goToHomePage}></span>
        </div>
 
    )
 
}
