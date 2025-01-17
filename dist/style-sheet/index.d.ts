/// <reference types="react" />
import { StyleSheetRuntime } from "./runtime";
export type { StylesArray, Snapshot } from "./runtime";
export { StyleSheetRuntime } from "./runtime";
export declare const NativeWindStyleSheet: {
    create: ({ styles, atRules, masks, topics, units, childClasses, transforms, }: Partial<Pick<StyleSheetRuntime, "atRules" | "styles" | "masks" | "topics" | "units" | "childClasses" | "transforms">>) => void;
    setDimensions: (dimensions: import("react-native").Dimensions) => void;
    setAppearance: (appearance: typeof import("react-native").Appearance) => void;
    setPlatform: (platform: "ios" | "android" | "windows" | "macos" | "web" | "harmony") => void;
    setOutput: (specifics: {
        ios?: "native" | "css" | undefined;
        harmony?: "native" | "css" | undefined;
        android?: "native" | "css" | undefined;
        windows?: "native" | "css" | undefined;
        macos?: "native" | "css" | undefined;
        web?: "native" | "css" | undefined;
        native?: "native" | "css" | undefined;
        default?: "native" | "css" | undefined;
    }) => void;
    setColorScheme: (colorSchemeSystem: import("./color-scheme").ColorSchemeSystem) => void;
    platformSelect: {
        <T>(specifics: ({
            ios?: T | undefined;
            harmony?: T | undefined;
            android?: T | undefined;
            windows?: T | undefined;
            macos?: T | undefined;
            web?: T | undefined;
            native?: T | undefined;
        } & {
            default: T;
        }) | {
            ios: T;
            harmony: T;
            android: T;
            windows: T;
            macos: T;
            web: T;
            native: T;
        }): T;
        <T_1>(specifics: {
            ios?: T_1 | undefined;
            harmony?: T_1 | undefined;
            android?: T_1 | undefined;
            windows?: T_1 | undefined;
            macos?: T_1 | undefined;
            web?: T_1 | undefined;
            native?: T_1 | undefined;
        }): T_1 | undefined;
    };
    platformColor: (color: string) => string | import("react-native").OpaqueColorValue;
    hairlineWidth: () => number;
    pixelRatio: (value: number | Record<string, number>) => number;
    fontScale: (value: number | Record<string, number>) => number;
    getPixelSizeForLayoutSize: (layoutSize: number) => number;
    roundToNearestPixel: (layoutSize: number) => number;
    setDangerouslyCompileStyles: (dangerouslyCompileStyles: (className: string, store: StyleSheetRuntime) => void) => void;
};
export declare const StoreContext: import("react").Context<StyleSheetRuntime>;
