/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CandidateBelievability } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function BelievabilityScreenlandscape(props) {
  const { candidateBelievability, overrides, ...rest } = props;
  const rectangleThreeFourSevenOneOneEightTwoFiveOnClick =
    useDataStoreUpdateAction({
      fields: {},
      id: candidateBelievability?.role,
      model: CandidateBelievability,
      schema: schema,
    });
  return (
    <View
      width="1440px"
      height="1047px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(246,248,252,1)"
      {...rest}
      {...getOverrideProps(overrides, "BelievabilityScreenlandscape")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1440px"
        height="125px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 1000001357")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1440px"
          height="125px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001238")}
        >
          <View
            width="1440px"
            height="125px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(10,113,185,1)"
            {...getOverrideProps(overrides, "Rectangle 1")}
          ></View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="1440px"
          height="125px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Mask group")}
        >
          <View
            width="1440px"
            height="125px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(238,108,77,1)"
            {...getOverrideProps(overrides, "Rectangle 5288")}
          ></View>
          <Icon
            width="1003.92px"
            height="496.44px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1346.134521484375,
              height: 499.3000793457031,
            }}
            paths={[
              {
                d: "M43.5856 19.6568C38.3458 12.428 44.4855 2.47782 53.2965 3.91905L556.653 86.2537C558.429 86.5442 560.25 86.35 561.925 85.6918L740.519 15.499C746.791 13.0337 753.657 17.3529 754.15 24.0746L765.207 174.852C765.4 177.479 766.622 179.925 768.607 181.656L986.765 371.939C993.326 377.662 989.948 388.453 981.295 389.414L488.361 444.143L28.8728 493.346C19.4167 494.359 14.0193 482.844 20.8468 476.224L222.328 280.861C225.898 277.399 226.382 271.84 223.463 267.813L43.5856 19.6568Z",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="140.07%"
            bottom="-437.22%"
            left="32.39%"
            right="-2.11%"
            transformOrigin="top left"
            transform="rotate(-171.36deg)"
            {...getOverrideProps(overrides, "Rectangle 5286")}
          ></Icon>
          <Icon
            width="1003.92px"
            height="496.44px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1346.13427734375,
              height: 499.30010986328125,
            }}
            paths={[
              {
                d: "M96.3044 92.3869C71.6772 58.4116 100.534 11.6457 141.946 18.4195L518.666 80.0401C545.305 84.3975 572.626 81.4858 597.749 71.6119L693.758 33.8773C723.239 22.2903 755.508 42.5907 757.825 74.1823L763.312 149.012C764.719 168.194 773.639 186.045 788.133 198.687L923.291 316.576C954.128 343.472 938.252 394.193 897.584 398.708L488.361 444.143L135.704 481.906C91.2599 486.666 65.8921 432.546 97.9817 401.431L135.233 365.311C188.789 313.382 196.046 229.988 152.265 169.589L96.3044 92.3869Z",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="219.23%"
            bottom="-516.38%"
            left="132.66%"
            right="-102.38%"
            transformOrigin="top left"
            transform="rotate(-171.36deg)"
            {...getOverrideProps(overrides, "Rectangle 5287")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="36.30681610107422px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="391.68px"
          height="28.65px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="38.4%"
          bottom="38.68%"
          left="36.27%"
          right="36.53%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Believability"
          {...getOverrideProps(overrides, "Believability")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="612px"
        height="758px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="227px"
        left="88px"
        {...getOverrideProps(overrides, "Group 1000001358")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001290")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11823")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Role"
              {...getOverrideProps(overrides, "Role")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              onClick={() => {
                rectangleThreeFourSevenOneOneEightTwoFiveOnClick();
              }}
              {...getOverrideProps(overrides, "Rectangle 34711825")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Choose your current role"
              {...getOverrideProps(overrides, "Choose your current role")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011827")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="112px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001291")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11829")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Experience"
              {...getOverrideProps(overrides, "Experience")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711831")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Total year of experience"
              {...getOverrideProps(overrides, "Total year of experience")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011833")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="224px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001292")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11835")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Overall Experience"
              {...getOverrideProps(overrides, "Overall Experience")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711837")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Total overall year of experience"
              {...getOverrideProps(
                overrides,
                "Total overall year of experience"
              )}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011839")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="336px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001293")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11841")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Programming Language"
              {...getOverrideProps(overrides, "Programming Language")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711843")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Most preferable programming lang."
              {...getOverrideProps(
                overrides,
                "Most preferable programming lang."
              )}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011845")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="448px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001294")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11847")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Proficiency"
              {...getOverrideProps(overrides, "Proficiency")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711849")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Framework Proficiency"
              {...getOverrideProps(overrides, "Framework Proficiency")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011851")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="560px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001295")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11853")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Choose your education"
              {...getOverrideProps(overrides, "Choose your education11854")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711855")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Choose your education"
              {...getOverrideProps(overrides, "Choose your education11856")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011857")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="86px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="672px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001296")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11859")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Domain"
              {...getOverrideProps(overrides, "Domain")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711861")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Choose your strongest domain"
              {...getOverrideProps(overrides, "Choose your strongest domain")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011863")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="612px"
        height="608px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="266px"
        left="757px"
        {...getOverrideProps(overrides, "Group 1000001359")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="73px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001297")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11866")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="GitHub"
              {...getOverrideProps(overrides, "GitHub")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711868")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="https://www.github.com"
              {...getOverrideProps(overrides, "https://www.github.com")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011870")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="185px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001303")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11872")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Stack Overflow"
              {...getOverrideProps(overrides, "Stack Overflow")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711874")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="https://www.stackoverflow.com"
              {...getOverrideProps(overrides, "https://www.stackoverflow.com")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011876")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="297px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001304")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11878")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Kaggle"
              {...getOverrideProps(overrides, "Kaggle")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711880")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="https://www.kaggle.com"
              {...getOverrideProps(overrides, "https://www.kaggle.com")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011882")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="409px"
          left="0px"
          {...getOverrideProps(overrides, "Group 1000001305")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11884")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="LinkedIn"
              {...getOverrideProps(overrides, "LinkedIn")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711886")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="https://www.linkedin.com"
              {...getOverrideProps(overrides, "https://www.linkedin.com")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011888")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="612px"
          height="87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="521px"
          left="0px"
          {...getOverrideProps(overrides, "Group 100000130611889")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="612px"
            height="87px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Name11890")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,44,68,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Patents"
              {...getOverrideProps(overrides, "Patents")}
            ></Text>
            <View
              width="612px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              border="1px SOLID rgba(230,232,236,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 34711892")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(119,126,144,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="45px"
              left="14px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="https://www.patents.com"
              {...getOverrideProps(overrides, "https://www.patents.com")}
            ></Text>
          </View>
          <Icon
            width="10px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
            paths={[
              {
                d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM5 5L4.46967 5.53033L5 6.06066L5.53033 5.53033L5 5ZM10.5303 0.53033C10.8232 0.237437 10.8232 -0.237437 10.5303 -0.53033C10.2374 -0.823223 9.76256 -0.823223 9.46967 -0.53033L10.5303 0.53033ZM-0.53033 0.53033L4.46967 5.53033L5.53033 4.46967L0.53033 -0.53033L-0.53033 0.53033ZM5.53033 5.53033L10.5303 0.53033L9.46967 -0.53033L4.46967 4.46967L5.53033 5.53033Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54px"
            left="585px"
            {...getOverrideProps(overrides, "Vector 17011894")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36.30681610107422px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Others - Provide Links"
          {...getOverrideProps(overrides, "Others - Provide Links")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="520px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="927px"
        left="803px"
        {...getOverrideProps(overrides, "Group 100000130611896")}
      >
        <View
          width="250px"
          height="56px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="270px"
          border="0.5px SOLID rgba(229,229,229,1)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(90,90,92,1)"
          {...getOverrideProps(overrides, "Rectangle 359")}
        ></View>
        <View
          width="250px"
          height="56px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="0.5px SOLID rgba(229,229,229,1)"
          boxShadow="0px 4px 20px rgba(0.03921568766236305, 0.4431372582912445, 0.7254902124404907, 0.20000000298023224)"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(10,113,185,1)"
          {...getOverrideProps(overrides, "Rectangle 360")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="19.363636016845703px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="19px"
          left="377px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Next"
          {...getOverrideProps(overrides, "Next")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="19.363636016845703px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="19px"
          left="98px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Submit"
          {...getOverrideProps(overrides, "Submit")}
        ></Text>
      </View>
    </View>
  );
}
