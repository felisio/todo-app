import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const Styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryGrey',
    paddingVertical: 0,
    marginVertical: -10,
  },
  disabled: {
    backgroundColor: '$primaryGrey',
  }
});

const UPDATE_TODO_MUTATION = gql`
  mutation UPDATE_TODO_MUTATION(
    $id: ID!
    $description: String!
    $done: Boolean!
  ) {
    updateTodo(
      id: $id
      description: $description
      done: $done
    ) {
      id
      done
    }
  }
`;

export default class TodoItem extends Component {
  state = {
    checked: false,
  }

  handlePressCheck = async (updateTodo, done) => {
    try {
      const {data} = await updateTodo({
        variables: {
          ...this.props.item,
          done: !done,
        }
      });
    } catch (error) {
      
    }
  }
  
  
  render() {
    const { item } = this.props;
    return (
      <Mutation refetchQueries={['LIST_TODO_QUERY']} mutation={UPDATE_TODO_MUTATION} >
        {(updateTodo, {loading, error}) => (
           <View style={Styles.container}>
            <ListItem
              disabled={loading}
              disabledStyle={Styles.disabled}
              title={
                <CheckBox
                  title={item.description}
                  value={item.done}
                  onPress={() => this.handlePressCheck(updateTodo, item.done)}
                  checked={item.done}
                />
              }
            />
          </View>
        )}
      </Mutation>
     
    );
  }
}

