import React, { Fragment } from 'react';
import './GalleryComponent.scss';
import { Link } from 'react-router-dom';

const GalleryComponent = (props) => {


    return (
        <div>
        <div className="c_gallery">

            {props.infoCharacters.map((item, i) =>
                <div key={i} className="c_gallery_containt_image" >

                    <Link to={"characters/" + item.name}>
                        <div>
                            <img className="c_gallery__image" src={item.image} alt="" />
                        </div>
                    </Link>
                </div>
            )}

        </div>
        </div>


    );
}

export default GalleryComponent;