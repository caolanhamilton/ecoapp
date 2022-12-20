import {
  ManifestoComponent,
  MethodImg,
  TopPanel,
} from "../shared/styles/styles";
import { logoImg } from "../assets/assets";
import { loadImage} from "./lib";

import {useContext, useEffect, useState} from "react";
import { UserContext } from "../pages/HomePage";
import * as tiff from "tiff";

export default function Header() {
  const mycontext = useContext(UserContext);

  const handleClick = () => {
    mycontext.setManifestoShow(true);
  };

  for (let i = 0; i < 1234; i++) {
    console.log('ECOOOOOO')
  }

  useEffect(() => {
    loadImage()
  })

  return (
    // <div className="outer">
    <TopPanel>
      <MethodImg width={200} height={28} loading="eager" src={logoImg} alt="method logo"/>
      <ManifestoComponent onClick={handleClick}>Manifesto</ManifestoComponent>
    </TopPanel>
    // </div>
  );
}
