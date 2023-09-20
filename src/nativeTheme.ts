import { extendTheme } from "native-base";

const newColorTheme = {
    brand: {
        900: '#EB223A',
        800: '#F8485D',
    },
};

export const theme = extendTheme({ colors: newColorTheme });