import theme from "styled-theming";

export const color = theme.variants("mode", "color", {
    primary: { light: 'color:black', dark: 'color:white' },
    secondary: { light: 'color:white', dark: 'color:black' },
    primarydark: { light: 'color:#271661', dark: 'color:#271661' },
    primarylight: { light: 'color:#6f87ff', dark: 'color:#6f87ff'},
  });



  export const backgroundColor = theme.variants("mode", "backgroundColor", {
    primary: { light: "background-color:#fff", dark: "background-color:darkgray" },
    secondary: { light: "background-color:#271661", dark: "background-color:#271661" },
  });
