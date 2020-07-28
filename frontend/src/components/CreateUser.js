import React, { Component } from 'react'
//llamando a la libreria axios
import axios from 'axios'

export default class CreateUser extends Component {
    state = {
        users: [],
        username: ''
    }

    getUser = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        //console.log(res);
        this.setState({users: res.data})
    }

    async componentDidMount() {
        this.getUser();
        console.log(this.state.users);
    }

    _onChangeUsername = (e) => {
        //console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }

    _onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.setState({username: ''});
        //console.log(res);
        this.getUser();
    }

    _deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        this.getUser();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-center">Create New User</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this._onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={this.state.username}
                                        onChange={this._onChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Save User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                            <li 
                            className="list-group-item list-group-item-action" 
                            key={user._id}
                            onDoubleClick={() => this._deleteUser(user._id)}
                            >
                                {user.username}
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
