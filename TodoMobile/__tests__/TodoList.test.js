import 'react-native';
import 'jest-enzyme';
import React from 'react';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import TodoList, { LIST_TODO_QUERY } from '../app/components/TodoList/TodoList';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mocks = [
  {
    request: {
      query: LIST_TODO_QUERY,
    },
    result: {
      data: {
        todoes: [
          {
            __typename: 'Todo',
            id: '123',
            description: 'teste',
            done: false,
          }
        ]
      },
    },
  }
];

describe('<TodoList />', () => {
  it('renders Loading', async () => {
    const wrapper = renderer.create(
      <MockedProvider mocks={mocks}>
        <TodoList />
      </MockedProvider>
    ).toJSON();
    
    await wait();
    expect(wrapper).toMatchSnapshot();
  });

  // it('renders List', async () => {
  //   const wrapper = mount(
  //     <MockedProvider mocks={mocks}>
  //       <TodoList />
  //     </MockedProvider>
  //   );
    
  //   await wait();
  //   wrapper.update();
  //   console.log(wrapper.debug())
  //   //expect(wrapper).toMatchSnapshot();
  // });
})
