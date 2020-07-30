import React, { Component } from 'react'
//llamando a axios
import axios from 'axios'
//llamando a datapicker
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        });
        //console.log(this.state.users);
        if(this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/notes/'+ this.props.match.params.id)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                author: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            })
        }
        
    }

    _onSubmit = async e => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        if(this.state.editing) {
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote)
        } else {
            await axios.post('http://localhost:4000/api/notes/', newNote);
        }
        //console.log(res);
        window.location.href = "/"
    }

    _onChangeUsername = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.value)
    }

    _onChangeDate = date => {
        this.setState({date})
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
                                value={this.state.author}
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
                                onChange={this._onChangeUsername}
                                value={this.state.title}
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="content"
                                className="form-control"
                                placeholder="content"
                                required
                                onChange={this._onChangeUsername}
                                value={this.state.content}
                                >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <DatePicker 
                                className="form-control"
                                selected={this.state.date}
                                onChange={this._onChangeDate}
                                
                            />
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
