/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ListboxComponent from "./ListboxComponent";
import { View } from "@aws-amplify/ui-react";
export default function IMac1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="720px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "IMac1")}
    >
      <ListboxComponent
        width="308px"
        height="289px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="215px"
        left="486px"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "Listbox Component")}
      ></ListboxComponent>
    </View>
  );
}
