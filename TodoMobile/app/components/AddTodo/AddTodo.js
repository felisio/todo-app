import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const containerWidth = Dimensions.get('window').width;

const Styles = EStyleSheet.create({
  container: {
    flex: .1,
    alignItems: 'center',
    flexDirection: 'row',
    width: containerWidth - 50,
  },
  buttonStyle: {
    borderColor:'$primaryGreen',
  },
  titleStyles: {
    color:'$primaryGreen',
  }
})

const CREATE_TODO_MUTATION = gql`
  mutation CREATE_TODO_MUTATION(
    $description: String!
    $done: Boolean!
  ) {
    createTodo(
      description: $description
      done: $done
    ) {
      id
    }
  }
`;

class AddTodo extends Component {
  state = {
    description: '',
    done: false,
  }

  handlePressAddTodo = async (createTodo) => {
    if(!this.state.description) return false
    const resp = await createTodo()
    this.setState({description: ''})
  }

  render() {
    return (
      <Mutation refetchQueries={['LIST_TODO_QUERY']} mutation={CREATE_TODO_MUTATION} variables={this.state}>
        {(createTodo, {loading, error}) => (
          <View style={Styles.container}>
          <Input
            placeholder='Add a to-do'
            leftIcon={{ type: 'font-awesome', name: 'plus' }}
            containerStyle={{ width: 270 }}
            value={this.state.description}
            onChangeText={(description) => this.setState({description})}
          />
          <Button
            title="Add"
            type="outline"
            loading={loading}
            titleStyle={Styles.titleStyles}
            buttonStyle={Styles.buttonStyle}
            onPress={() => this.handlePressAddTodo(createTodo)}
          />
        </View>
        )}
      </Mutation>
    )
  }
}

export default AddTodo;
