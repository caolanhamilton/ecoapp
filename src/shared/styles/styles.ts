import styled from "styled-components";

import { createGlobalStyle} from "styled-components";

export const LeftSlidingDrawer = styled.div<{
  show: boolean;
}>`
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  color: white;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  /* right: 0; */
  left: ${(props) => (props.show ? "0" : "100%")};
  background-color: #111;
  overflow-x: hidden;
  transition: ${(props) => (props.show ? "1s" : "0.5s")};

  padding-left: 8%;
  padding-right: 8%;
  margin-left: 0;
`;
/* padding-top: 60px; */

export const SlidingDrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
/* padding-top: 60px; */

export const ArticleDiv = styled.div<{
  show: boolean;
}>`
  display: flex;
  flex-direction: column;
  color: black;
  height: 100%;
  width: 90%;
  padding-left: 8%;
  padding-right: 8%;
  margin-left: 5%;
  margin-right: 5%;
  position: fixed;
  z-index: 1;
  top: 0;
  /* right: 0; */
  left: ${(props) => (props.show ? "0" : "100%")};
  background-color: white;
  overflow-x: hidden;
`;

export const Hero = styled.div`
  width: 874px;
  // height: 161px;

  /* Headings/Hero */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 144px;
  line-height: 112%;
  /* or 161px */

  letter-spacing: -1px;

  /* Blue */

  color: #4442e3;

  /* Inside auto layout */

  // flex: none;
  // order: 0;
  // flex-grow: 0;
`;

export const TopPanel = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SwitchPanel = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  //200px 200px;
  width: 371px;
  gap: 100px;
`;

export const SwitchTxt = styled.p`
  // margin-top: 5%;
  // font-size: 28px;
  // margin-left: 0;

  width: 235px;
  height: 34px;

  /* Headings/H4 */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  color: #ffffff;
`;

export const HomeSub = styled.p`
  width: 659px;
  height: 68px;

  /* Headings/H4 */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  color: #ffffff;

  /* Inside auto layout */

  // flex: none;
  // order: 1;
  // flex-grow: 0;
`;

export const Circle = styled.div<{
  side: string;
}>`
  position: fixed;
  // z-index: -1;
  right: -100px;
  // right: 0;
  bottom: -100px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: white;
  border-radius: 50%;
  /* display: inline-block; */
  /* position: relative; */
  width: ${(props) => props.side};
  height: ${(props) => props.side};
  background: radial-gradient(
    ellipse at center,
    rgba(65, 72, 218, 1) 1%,
    rgba(0, 0, 0, 0) 60%
  );
`;

export const MethodImg = styled.img`
  width: 200px;
  float: left;
  margin-left: 0;
  margin-top: 2%;
`;

export const ArticleImg = styled.img<{ width: string; height: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  float: center;
  // margin-left: 0;
  // margin-top: 2%;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ManifestoComponent = styled.div`
  font-family: "DM Sans", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-right: 3%;
  margin-top: 2%;
`;

export const LowImpactTxt = styled.h1`
  width: 810px;
  height: 483px;

  /* Headings/Hero */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 144px;
  line-height: 112%;
  /* or 161px */

  letter-spacing: -1px;
  color: #ffffff;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const HomeTxt = styled.h4`
  width: 495px;
  height: 68px;

  /* Headings/H4 */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  /* or 34px */

  color: #ffffff;
`;

export const SwitchIntro = styled.p`
  // position: absolute;
  width: 328px;
  height: 135px;
  // left: 96px;
  // top: 357px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  /* White */
  color: #ffffff;
`;

export const HL = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
`;

export const Title = styled.h1`
  font-family: "DM Sans";
  font-size: 90px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
  color: rgb(65, 72, 218);
`;

export const EndTitle = styled.h1`
  font-family: "DM Sans";
  font-size: 110px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
  color: rgb(65, 72, 218);
`;

export const Heading1 = styled.h1`
  font-family: "DM Sans";
  font-size: 70px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
`;

export const Heading2 = styled.h1`
  font-family: "DM Sans";
  font-size: 50px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
`;

export const Heading3 = styled.h1`
  font-family: "DM Sans";
  font-size: 30px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
`;

export const Paragraph = styled.p`
  font-family: "DM Sans";
  font-size: 20px;
  text-align: left;
  width: 100%;
  // margin-left: 3%;
  color: white;
`;

export const Arrow = styled.img`
  // margin-left: 50%;
  // width: 10px;
  // height: 20px;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const CheckBoxLabel = styled.label`
  // top: 0;
  // left: 0;
  width: 75px;
  height: 46px;
  border-radius: 23px;
  background: #bebebe;

  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    // width: 18px;
    // height: 18px;
    width: 46px;
    height: 46px;
    margin: 0;
    background: #ffffff;

    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 23px;
  //border-radius: 50%;
  // width: 42px;
  // height: 26px;
  width: 75px;
  height: 46px;
  &:checked + ${CheckBoxLabel} {
    // background: #4fbe79;
    background: #4442e3;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      // width: 18px;
      // height: 18px;
      width: 46px;
      height: 46px;
      margin-left: 28px;
      //right: 0;
      transition: 0.2s;
    }
  }
`;

export const ButtonComponent = styled.div<{ selected: boolean }>`
  // background: none;
  // border-style: solid;
  border-radius: 30px;
  border-color: white;
  border-width: 1px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  padding: 8px 20px;
  margin-right: 30px;
  // gap: 10px;
  // margin: 1%;

  background-color: ${(props) =>
    props.selected ? "rgb(65, 72, 218)" : "none"};
  border-style: ${(props) => (props.selected ? "none" : "solid")};

  // &:hover {
  //   background-color: rgb(65, 72, 218);
  //   border-style: none;
  // }
`;

export const ArticleElement = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;

  // width: 67px;
  // height: 20px;
`;
