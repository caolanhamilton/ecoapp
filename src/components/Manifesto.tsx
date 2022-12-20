import "./SlidingDrawer.css";
import {
  Circle,
  LeftSlidingDrawer,
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  SlidingDrawerBody,
} from "../shared/styles/styles";

import "./Manifesto.css";

import Bubble from "../components/Bubble";

import {
  ManifestoComponent,
  MethodImg,
  TopPanel,
} from "../shared/styles/styles";
import { logoImg } from "../assets/assets";
import { UserContext } from "../pages/HomePage";
import { useContext, useState } from "react";

export default function Manifesto() {
  const handleClick = () => {
    mycontext.setManifestoShow(false);
  };

  const mycontext = useContext(UserContext);

  return (
    // <div className={mycontext.name}>
    <LeftSlidingDrawer show={mycontext.manifestoShow}>
      <TopPanel>
        <MethodImg height={28}  width={200} src={logoImg} alt="Method"/>
        <a href="javascript:void(0)" className="closebtn" onClick={handleClick}>
          &times;
        </a>
      </TopPanel>
      <SlidingDrawerBody>
        <p className="m1">Reducing our digital carbon footprint</p>
        <p className="m2">
          As business consultants and product makers, we must take
          responsibility for what we release out there in the World and its
          impact — now and in the future. This is why we developed a low-impact
          method.com having in mind a certain set of principles.
        </p>

        <p className="m3">
          Removing 500kb from your website that is visited 2000 times a month
          can save 147.500g CO2
        </p>
        <p className="m4">
          {" "}
          And it can still be functional, efficient and desirable.
        </p>

        <p className="m5">This is the same as</p>

        <div className="three">
          <div>
            <p className="m6">03</p>
            <p className="m7">Trees planted</p>
          </div>

          <div>
            <p className="m6">37.6g</p>
            <p className="m7">Of beef consumed</p>
          </div>

          <div>
            <p className="m6">10km</p>
            <p className="m7"> By car</p>
          </div>
        </div>

        <div className="four">
          <div>
            <p className="m6">01</p>
            <p className="m8">'Load-as-you-go' images and videos</p>
            <p className="m8">
              We have removed the media content, and replaced with alt text to
              highlight the fact that words are sometimes enough. In this
              instance, the user is presented with a choice along with the facts
              on much co2e their action will emit{" "}
            </p>
          </div>

          <div>
            <p className="m6">02</p>
            <p className="m8">Consolidate Content</p>
            <p className="m8">
              As we designed the website, we asked ourself what were we
              achieving from having some contents and if it was watched by the
              users. So we consolidated the website removing unnecessary
              sections and medias. It reduced pages weight and surplus CO2
              emissions.
            </p>
          </div>

          <div>
            <p className="m6">03</p>
            <p className="m8">Clean Code</p>
            <p className="m8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Turpis
              egestas pretium aenean pharetra.
            </p>
          </div>

          <div>
            <p className="m6">04</p>
            <p className="m8">Carbon Awareness</p>
            <p className="m8">
              We wanted to help users see the impact of their consumption. The
              aim is to raise awareness on the subject and give a tangibile
              overview of what makes this website low impact.
            </p>
          </div>
        </div>
      </SlidingDrawerBody>
    </LeftSlidingDrawer>
    // </div>
  );
}
