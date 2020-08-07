import {createStackNavigator, createAppContainer} from 'react-navigation';
import Sender from './screens/Sender';
import Receiver from './screens/Receiver';
import Intro from './screens/Intro';
import splash from './screens/splash';


const mainTabs = createStackNavigator({
    splash: {
        screen: splash,
        navigationOptions: {
          header: null,
        },
      },
    app: {
      screen: Intro,
      navigationOptions: {
        header: null,
      },
    },
    sender: {screen: Sender},
    receiver: {screen: Receiver},
});

export default createAppContainer(mainTabs);
