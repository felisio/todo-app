import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import Container from '../../components/Container/Container'
import AddTodo from '../../components/AddTodo/AddTodo'
import TodoList from '../../components/TodoList/TodoList'

const containerWidth = Dimensions.get('window').width;

const Styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: containerWidth,
    marginTop: 20,
  },
  header: {
    backgroundColor:'$primaryGreen',
  },
  list: {
    flex: .7,
    justifyContent: 'flex-start',
    width: containerWidth,
  },
}) 

const Home = (props) => (
    <Container>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Todo App', style: { color: '#fff' } }}
        containerStyle={Styles.header}
      />
      <View style={Styles.container}>
          <AddTodo />
          <View style={Styles.list}>
            <TodoList />
          </View>
      </View>
    </Container>
);

export default Home;
