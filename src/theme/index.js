import bibby from "./bibby";
import demo from "./demo";

const themes = {
  bibby,
  demo
};

const domainParts = window.location.hostname.split(".");
const themeName = domainParts[0];

const Theme = typeof themes[themeName] !== 'undefined' ? themes[themeName] : themes['demo'];
export default Theme;
