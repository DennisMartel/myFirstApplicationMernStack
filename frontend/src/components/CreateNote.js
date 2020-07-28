import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {
    state = {
        users: [],
        //userSelected
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username)});
        console.log(this.state.users);
    }

    _onSubmit = e => {
        e.preventDefault();
    }

    _onChangeUsername = e => {
        this.setState({
            userSelected: e.target.value
        })
        //console.log(e.target.value)
    }

    render() {
        return (
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header">
                        <h6 className="text-center">Create New Note</h6>
                    </div>
                    <div className="card-body">
                        {/** seleccionendo los usuarios */}
                        <div className="form-group">
                            <select 
                                className="form-control"
                                name="userSelected"
                                onChange={this._onChangeUsername}
                            >
                                {
                                    this.state.users.map(user =>
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="title"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="content"
                                className="form-control"
                                placeholder="content"
                                required
                                >
                            </textarea>
                        </div>
                        <form onSubmit={this._onSubmit}>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Save Note</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
