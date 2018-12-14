/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as AppsControllers from "./src/AppControllers";
import { registerScreens } from "./src/screens";
import store from "./src/redux/store";
import { Provider } from "react-redux";

registerScreens(store, Provider);

const startApp = () => {
  AppsControllers.startInitial();
};
export default { start: startApp };
