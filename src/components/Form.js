import React, {Component} from 'react'

class Form extends Component {
    state = {
        content: '',
        completed: false
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state)
        this.setState({
            content: ''
        })
    }

    handleStatus = (e) => {
        this.props.showStatus(e.target.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input">
                    <input type="text" className="todo-input" onChange={this.handleChange} value={this.state.content}/>
                    <button type="submit" className="btn-add is-white">add</button>
                </div>
                <select id="select" name="select" onChange={this.handleStatus}>
                    <option value="all">all</option>
                    <option value="true">completed</option>
                    <option value="false">uncompleted</option>
                </select>
            </form>        
        )
    }
}

export default Form