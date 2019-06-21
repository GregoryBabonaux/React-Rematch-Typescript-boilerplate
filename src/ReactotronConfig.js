import Reactotron, { trackGlobalErrors } from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron
  .configure({
    name: 'Boilerplate',
    port: 9090,
  }) // controls connection & communication settings
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .connect() // let's connect!

  export default reactotron;