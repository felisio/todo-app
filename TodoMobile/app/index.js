import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ApolloProvider } from "react-apollo";

import Navigator from './config/routes'
import apolloClient from './config/apollo'

//XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

EStyleSheet.build({
  $primaryBlue: '#2E86DE',
  $primaryOrange: '#FF9f43',
  $primaryGreen: '#10AC84',
  $primaryRed: '#EE5253',
  $primaryGrey: '#dfe6e9',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#EEEEEE',
  $darkText: '#343434',
  $defaultTheme: '$primaryRed',
  $theme: '$primaryRed',
  // $outline: 1, // revela as linhas que estão sendo desenhadas
})


const App = () => (
  <ApolloProvider client={apolloClient}>
     <Navigator onNavigationStateChange={null} />
  </ApolloProvider>
);


export default App;
