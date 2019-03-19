import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import TodoItem from '../TodoItem/TodoItem'

const LIST_TODO_QUERY = gql`
  query LIST_TODO_QUERY{
    todoes {
      id
      description
      done
    }
  }
`;


class TodoList extends Component {
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TodoItem item={item} />
  )

  renderFeedBack = (text) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
  )

  render () {
    return (
      <Query query={LIST_TODO_QUERY} >
        {({data, error, loading}) => {
          if (loading) return this.renderFeedBack('Loading...')
          if (error) return this.renderFeedBack(`Error Aqui: ${error.message}`)
          if(!data.todoes.length) return this.renderFeedBack('Insert a to-do') 

          return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={data.todoes}
            renderItem={this.renderItem}
          />
          )
        }}
      </Query>
    )
  }
  
}

export default TodoList
export { LIST_TODO_QUERY }