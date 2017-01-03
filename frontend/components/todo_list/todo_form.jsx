import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo({
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: this.state.done
    });
    this.setState({title: "", body: "", done: false});
  }

  updateInput(input, e) {
    this.setState({[input]: e.target.value});
  }

  render() {
    return (
      <div>
        <h2>Todos!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              onChange={this.updateInput.bind(null, "title")}
              type="text"
              value={this.state.title}
              />
          </label>
          <label>
            Body:
            <input
              onChange={this.updateInput.bind(null, "body")}
              type="text"
              value={this.state.body}
              />
          </label>
          <label>
            Done:
            <input
              onChange={this.updateInput.bind(null, "done")}
              type="text"
              value={this.state.done}
              />
          </label>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
