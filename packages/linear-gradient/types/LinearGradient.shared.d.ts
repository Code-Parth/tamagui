/// <reference types="react" />
import { ColorTokens, ThemeTokens } from '@tamagui/core';
import { YStackProps } from '@tamagui/stacks';
import type { ViewStyle } from 'react-native';
import { LinearGradientProps as ExpoLinearGradientProps } from './linear-gradient';
export type LinearGradientProps = Omit<ExpoLinearGradientProps, 'colors'> & Omit<YStackProps, 'children' | keyof ExpoLinearGradientProps> & {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
};
export declare const LinearGradient: import("@tamagui/core").TamaguiComponent<Omit<ExpoLinearGradientProps, "colors"> & Omit<Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}>>, "colors" | keyof import("react-native").ViewProps | "locations" | "start" | "end"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
} & Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}>>, import("@tamagui/core").TamaguiElement, Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, {
    displayName: string | undefined;
    __baseProps: Omit<import("react-native").ViewProps, "style" | "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").WebOnlyPressEvents & import("@tamagui/core").TamaguiComponentPropsBaseBase & {
        style?: import("@tamagui/core").StyleProp<ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps;
    __variantProps: {};
}>;
//# sourceMappingURL=LinearGradient.shared.d.ts.map