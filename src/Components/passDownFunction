...

addTodoItem: function(todoItem) {
  this.state.todos.push(todoItem);
  this.setState({todos: this.state.todos});
},

render: function() {

  ...

  return <div>
    <h3>Todo(s)</h3>
    {todos}
    <TodoForm addTodoItem={this.addTodoItem} />
  </div>
}
});

var TodoForm = React.createClass({
handleClick: function(e) {
  e.preventDefault();
  this.props.addTodoItem(this.state.todoInput);
  this.setState({todoInput: ""});
},

...

});
