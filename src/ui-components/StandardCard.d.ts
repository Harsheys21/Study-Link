/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardCardOverridesProps = {
    StandardCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Pooja\u2019s Group"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "bdasgupt@ucsc.edu"?: PrimitiveOverrideProps<TextProps>;
    "CSE 103"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    studyGroupCard?: any;
    openGroup?: String;
    group?: String;
} & {
    overrides?: StandardCardOverridesProps | undefined | null;
}>;
export default function StandardCard(props: StandardCardProps): React.ReactElement;
