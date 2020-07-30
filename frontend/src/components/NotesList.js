import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class NotesList extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.getNotes()
    }

    _deleteNote = async id => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`)
        this.getNotes();
    }

    async getNotes() {
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({notes: res.data})
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-3 p-2" key={this._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h6>
                                        {note.title}
                                    </h6>
                                    <Link className="btn btn-warning" to={"/edit/" + note._id}>
                                        edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this._deleteNote(note.id)}>
                                        delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
