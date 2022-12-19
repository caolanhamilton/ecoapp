import React, { useState } from "react";
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  SwitchPanel,
  SwitchTxt,
} from "../shared/styles/styles";

import "./SwitchComponent.css";

export interface Toggle {
  name: string;
  on: boolean;
  desc: string;
}

export default function SwitchComponent(props: any) {
  const [switches, setSwitches] = useState<Toggle[]>([
    { name: "WhatWeDo", on: true, desc: "What We Do" },
    { name: "WhatWeThink", on: false, desc: "What We Think" },
    { name: "WhoWeAre", on: false, desc: "Who We Are" },
  ]);

  const handleOnChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newArr = [...switches];
    //turn off scenario
    if (switches[index].on) {
      newArr[index] = { ...newArr[index], on: false };
    } else {
      //turn on scenario (which turns all other switches off, leaving only the selected one)
      newArr = switches.map((obj, i) =>
        i == index ? { ...obj, on: true } : { ...obj, on: false }
      );
    }
    setSwitches(newArr);
    return props.onChange(newArr);
  };

  return (
    <div className="switch">
      {switches.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <SwitchTxt key={index}>{item.desc}</SwitchTxt>
            <CheckBoxWrapper>
              <CheckBox
                id={item.name}
                type="checkbox"
                onChange={(e) => handleOnChange(index, e)}
                checked={item.on}
              />
              <CheckBoxLabel htmlFor={item.name} />
            </CheckBoxWrapper>
          </React.Fragment>
        );
      })}
    </div>
  );
}
