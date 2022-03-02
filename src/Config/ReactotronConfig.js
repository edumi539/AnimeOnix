import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

let onix;

onix = Reactotron.configure({ name: "Anime Onix" })
  .use(reactotronRedux()) // we can use plugins here -- more on this later
  .connect(); // let's connect!

console.onix = onix;
onix.clear();

export default onix;
