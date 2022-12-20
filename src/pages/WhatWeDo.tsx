import {MouseEvent, useEffect, useState} from "react";
import {ButtonComponent} from "../shared/styles/styles";
import "./WhatWeDo.css";
import image from "../assets/images/whatwedo.webp";
import ecoImage from "../assets/images/eco-windmills.webp";

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
          We craft respectful digital experiences that improve lives and
          transform businesses. Without breaking our ecosystems further.
        </h3>

        <img
          src={image}
          height={810}
          width={537}
          alt="Our clients"
          loading="eager"
        />
        <img
          height={1000}
          width={1500}
          style={{
            zIndex: -1,
            position: "absolute",
            opacity: 0,
            height: "1000",
            width: "1500px",
          }}
          src={ecoImage}
          loading="eager"
          alt="eco image"
        />

        <div style={{ margin: "auto" }}>
          <ButtonComponent
            style={{ width: "124px" }}
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
