import { Navigation } from "react-native-navigation";
import { Login, Register } from "./auth";
import IDs from "./IDs";

const screens = {
  [IDs.Login]: Login,
  [IDs.Register]: Register
};

const registerScreens = (store: Object, Provider: Object) => {
  // // Loop through the array and register every screen in it.
  Object.keys(screens).map(screenID => {
    Navigation.registerComponent(
      screenID,
      () => screens[screenID],
      store,
      Provider
    );
  });
};

export { registerScreens, IDs };
