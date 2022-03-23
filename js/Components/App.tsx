import {Navigation} from 'react-native-navigation';
import Globals from '../Common/Globals';
import HomeScreen from './HomeScreen';
import ActionScreen from './ActScreen';

export default function start(): any {
  Navigation.registerComponent(Globals.Screens.HomeScreen.name, () => HomeScreen);
  Navigation.registerComponent(Globals.Screens.ActScreen.name, () => ActionScreen);
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'mainStack',
          children: [
            {
              component: {
                name: 'HomeScreen',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}
