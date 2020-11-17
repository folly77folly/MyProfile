import theme from "styled-theming";

export const color = theme.variants("mode", "color", {
    primary: { light: 'color:black', dark: 'color:white' },
    secondary: { light: 'color:white', dark: 'color:yellow' },
    primarydark: { light: 'color:#271661', dark: 'color:#271661' },
    primarylight: { light: 'color:#6f87ff', dark: 'color:#6f87ff'},
    primarydarklight: { light: 'color:#685c90', dark: 'color:#685c90'},
    warning :{light:'color:yellow', dark:'color:red'}
    
  });



  export const backgroundColor = theme.variants("mode", "backgroundColor", {
    primary: { light: "background-color:#fff", dark: "background-color:#fff" },
    secondary: { light: "background-color:#271661", dark: "background-color:#fff" },
    yellow: { light: 'background:#ffd130', dark: 'background:#ffd130'},
    primarylight: { light: 'background:#6f87ff', dark: 'background:#6f87ff'},
  });
