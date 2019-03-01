import React from 'react'

import Post from './Post'
import RoutesComponent from './Routes'
import TodoItem from './TodoList/TodoItem'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="I'm learning React" />
                <Post title="React is very good" />
                <Post title="Soon I'll learn RN too" />
                <RoutesComponent />
            </div>
        )
    }
}