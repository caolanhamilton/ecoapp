import {MouseEvent, useEffect, useState} from "react";
import {ButtonComponent} from "../shared/styles/styles";
import "./WhatWeDo.css";
import image from "../assets/images/whatwedo.png";
import ecoImage from "../assets/images/eco-windmills.jpg";

export default function WhatWeDo(): JSX.Element {
    function onClickFilter(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ): void {
        throw new Error("Function not implemented.");
    }

    return (
        // <div className="displayBox">

        <div className="whatwedo">
            <h3>
                We craft respectful digital experiences that improve lives and transform
                businesses. Without breaking our ecosystems further.
            </h3>

            <img src={image} alt="Our clients" loading="eager"/>
            <img height="1500" width="1000" style={{zIndex: -1, position: "absolute", opacity: 0, width: '1000px', height: '1500px'}} src={ecoImage}
                 loading="eager"/>

            <div style={{margin: "auto"}}>
                <ButtonComponent
                    style={{width: "124px"}}
                    selected={true}
                    onClick={(e) => onClickFilter(e)}
                >
                    See our work
                </ButtonComponent>
            </div>

            <p>
                Why a download? Explicitely downloading a file reduces data transfer
                compared to a classic project portfolio pattern
            </p>
        </div>
    );
}
