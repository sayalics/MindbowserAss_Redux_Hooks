import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import ItemList from '../views/ItemList';
import DetailView from '../views/DetailView';
import ListRow from '../components/ListRow';
import colors from '../utils/colors';

const AppNavigator = createStackNavigator({
    //Constant which holds all the screens like index of any book 
      ItemList: { 
        screen: ItemList, //screen one
        navigationOptions : {
          title: 'Home',
          headerStyle: {
            backgroundColor: colors.royal_blue,
          },
          headerTintColor: colors.cardWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }, 
      DetailView: {
         screen: DetailView, //screen two
         navigationOptions: {
          title: 'Detail View',
          headerStyle: {
            backgroundColor: colors.royal_blue,
          },
          headerTintColor: colors.cardWhite,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         }
        }, 
      ListRow: {
        screen: ListRow,
      }
    },
    {
      initialRouteName: 'ItemList', //initial screen
    }
  );
  const AppContainer = createAppContainer(AppNavigator);
  export default AppContainer;