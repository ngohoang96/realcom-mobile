import { Navigation } from "react-native-navigation";

export const startInitial = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: "Login"
        }
      }
    });
  });
};
