import { Navigation } from "react-native-navigation";
import { IDs } from "../screens";
import { BottomIcons } from "../assets";

export const goToRegister = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: IDs.Register,
        children: [
          {
            component: {
              name: IDs.Register
            }
          }
        ]
      }
    }
  });
export const goToLogin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: IDs.Login,
        children: [
          {
            component: {
              name: IDs.Login
            }
          }
        ]
      }
    }
  });
export const goToMain = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        children: [
          {
            component: {
              name: IDs.Login,
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Home",
                  icon: BottomIcons.homeIcon
                }
              }
            }
          },
          {
            component: {
              name: IDs.Register,
              options: {
                bottomTab: {
                  text: "Contact",
                  fontSize: 12,
                  icon: BottomIcons.contactIcon
                }
              }
            }
          }
        ]
      }
    }
  });
