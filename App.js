import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppContainer from './src/navigations/AppNavigator';

const App = () => {
    return (
      <Provider store={store}>
          <AppContainer/>
      </Provider>
    );
  }


//import all the screens we are going to switch 


export default App;