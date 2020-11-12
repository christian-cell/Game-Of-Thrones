import React, { Fragment } from "react";
import "./GalleryComponentHouses.scss";
import { Link } from 'react-router-dom';

const GalleryComponentHouses = (props) => {
    return (
        <div className="c_gallery">
            {props.infoHouses.map((item, i) => (
                <>

                    {item.logoURL && (
                        <div className="c_gallery_containt_image">
                            <Link className =  " c_gallery__p  " styl to={"houses/" + item.name}>
                                <div>
                                    <img className="c_gallery__image" src={item.logoURL} alt="" />
                                    <p>{item.name}</p>

                                </div>
                            </Link>    
                        </div>
                    )} 
                </>
            ))}
                    {/* <div className="transition">
                        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        <img className="c_gallery__image" src={item.logoURL} alt="" />
                        <p>{item.name}</p>
                    </div>  */}
                
        </div>
    )
    
}


export default GalleryComponentHouses;
