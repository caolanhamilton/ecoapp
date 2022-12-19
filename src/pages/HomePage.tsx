import { arrowImg } from "../assets/assets";
import ArticlesComponent from "../components/ArticlesComponent";
import Header from "../components/HeaderComponent";
import Manifesto from "../components/Manifesto";
import Bubble from "../components/Bubble";
import "./HomePage.css";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";

import React, { useState, createContext, useEffect } from "react";
import ArticleDisplay from "../components/ArticleDisplay";
import {
  Arrow,
  HomeTxt,
  LowImpactTxt,
  SwitchTxt,
  ArticleDiv,
  SwitchIntro,
  HomeSub,
} from "../shared/styles/styles";
import SwitchComponent, { Toggle } from "../components/SwitchComponent";

// interface MyPanel {
//   name: string;
// }

export type ContextType = {
  manifestoShow: boolean;
  articleShow: boolean;
  currentArticle: any;
  setManifestoShow: (val: boolean) => void;
  setArticleShow: (val: boolean) => void;
  setCurrentArticle: (val: any) => void;
};

export const UserContext = createContext<ContextType>({
  articleShow: false,
  manifestoShow: false,
  currentArticle: null,
  setManifestoShow: () => void 0,
  setArticleShow: () => void 0,
  setCurrentArticle: () => void 0,
});

interface Orb {
  side: number;
  fixed: boolean;
  x?: number;
  y?: number;
  bottom?: number;
  right?: number;
}

export default function Home() {
  const [manifestoShow, setManifestoShow] = useState(false);
  const [articleShow, setArticleShow] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [switchSelected, setSwitchSelected] = useState<string>("WhatWeDo");
  // const [orb, setOrb] = useState<Orb>({
  //   side:
  //   fixed: true,
  //   right = -100,
  //   bottom = -100});

  const getSelectedDisplay = () => {
    switch (switchSelected) {
      case "WhoWeAre":
        return <WhoWeAre />;
      case "WhatWeThink":
        return <ArticlesComponent />;
      case "WhatWeDo":
        return <WhatWeDo />;
      default:
        return <div />;
    }
  };

  const handleChange = (switches: Toggle[]) => {
    let result = switches.find((obj) => obj.on === true);

    if (result) {
      setSwitchSelected(result.name);
    } else {
      setSwitchSelected("");
    }
  };

  return (
    <UserContext.Provider
      value={{
        manifestoShow,
        setManifestoShow,
        articleShow,
        setArticleShow,
        currentArticle,
        setCurrentArticle,
      }}
    >
      <div className="main">
        {/* <ArticlePageComponent /> */}
        <ArticleDisplay />
        <div className="HomeFirstScreen">
          <Header />
          <Manifesto></Manifesto>
          <LowImpactTxt>This is a low-impact experiment</LowImpactTxt>
          <HomeSub>
            What would our website look like if it was designed within a limited
            energy and data budget?
          </HomeSub>
          <div className="arrow">
            <div>
              <Arrow src={arrowImg}></Arrow>
            </div>
            <HomeTxt>Scroll to discover</HomeTxt>
          </div>
        </div>
        <Bubble />

        <div className="HomeSecondScreen">
          <div className="SwitchLeft">
            <SwitchIntro>
              Use the toggles below to load content. Notice how the grams of Co2
              change as you toggle content on and off. Please only toggle one
              page at a time to reduce page weight.
            </SwitchIntro>
            <SwitchComponent onChange={(e: any) => handleChange(e)} />
          </div>
          <div className="SwitchRight">{getSelectedDisplay()}</div>
        </div>
      </div>
    </UserContext.Provider>
  );
}
