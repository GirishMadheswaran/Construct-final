import React, { Component } from 'react';
import Topbar from '../../components/topBar/Topbar';
import './createConstruct.css'


class CreateConstruct extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            author: "",
            license: "",
            repository: "",
            registry: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleAuthorChange = (event) => {
        this.setState({ author: event.target.value })
    }

    handleLicenseChange = (event) => {
        this.setState({ license: event.target.value })
    }

    handleRepositoryChange = (event) => {
        this.setState({ repository: event.target.value })
    }

    handleRegistryChange = (event) => {
        this.setState({ registry: event.target.value })
    }

    handleSubmit = (event) => {
        alert(`
            Name : ${this.state.name},
            Author : ${this.state.author},
            License : ${this.state.license},
            Repository : ${this.state.repository},
            Registry : ${this.state.registry}
        `)
        this.setState({ msg: "Successfully saved" })
        event.preventDefault()
    }

    handleCancel =()=> {
        this.setState({
            name: "",
            author: "",
            license: "",
            repository: "",
            registry: "",
        })
    }

    render() {
        const { name, author, license, repository, registry } = this.state;
        return (
            <>
                <Topbar />
                <div className="contact">
                    <div className="form">
                        <div className="form-head">
                            <h1>CREATE CONSTRUCT</h1>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-body">
                                <input placeholder="Name" type="name" value={name} onChange={this.handleNameChange} /><br />
                                <input placeholder="Author" type="text" value={author} onChange={this.handleAuthorChange} /><br />
                                <input placeholder="License" type="text" value={license} onChange={this.handleLicenseChange} /><br />
                                <input placeholder="Repository" type="text" value={repository} onChange={this.handleRepositoryChange} /><br />
                                <input placeholder="Registry" type="text" value={registry} onChange={this.handleRegistryChange} /><br />
                                <button className="button" type="submit" >Save</button>
                                <h4 className="last-msg">{this.state.msg}</h4>
                            </div>
                        </form>
                        <form className='form-body'>
                        <button className="button" type="submit" onClick={this.handleCancel}>Clear</button>
                        </form>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default CreateConstruct;