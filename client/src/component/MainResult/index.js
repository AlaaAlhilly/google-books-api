import React, { Component } from 'react';
import SearchAndResult from '../SearchAndResult';
import Jumbotron from '../Jumbotron';
import API from '../../API';
import SavedBooks from '../SavedBooks';
import socketIOClient from "socket.io-client";
import Li from './Li';
class MainResult extends Component {
    state = {
        subject: "",
        books:[],
        saved_books: [],
        response: [],
      endpoint: `https://google-books-react-api.herokuapp.com/`
    }
    componentDidMount() {
        this.getBooks();
        const  endpoint  = this.state.endpoint;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
    }
    getBooks = () => {
        API.getBooks()
            .then(res => { this.setState({ saved_books: res.data }) })
            .catch(err=>console.log(err));
    }
    changeInputHandler = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    submitFormHandler = event => {
        event.preventDefault();
        if (!this.state.subject) {
            alert("what is the book's name?");
            return;
        }
        API.Search(this.state.subject)
            .then(res => { console.log(res);this.setState({ books: res.data.items }) })
            .catch(err => console.log(err));
    }

    handleSaveEvent = (id) => {
        const book = this.state.books.find(book => book.id === id);
        const book_to_save = {
            title: book.volumeInfo.title,
            date: book.volumeInfo.publishedDate,
            url: book.volumeInfo.previewLink,
            desc:book.volumeInfo.description.substring(0,255)
        };
        API.saveBooks(book_to_save)
            .then(this.getBooks)
            .catch(err => console.log(err));
    }

    handleDeleteEvent = (id) => {
        API.deleteBook(id)
            .then(this.getBooks)
            .catch(err => console.log(err));
    };
    generateList = () => {
        let res = this.state.response;
        let result = []
        for (let i = 0; i < res.length; i++) {
            result.push(
            <Li
                key={res[i]._id}
                value={res[i].title}
            />)
        }
         result.reverse()
        return result;
    }
    render() {
        const response = this.state.response;
        console.log(response)
        return (
           
            <div>
                <Jumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <SearchAndResult 
                                changeInputHandler={this.changeInputHandler}
                                submitFormHandler={this.submitFormHandler}
                                handleSaveButton = {this.handleSaveEvent}
                                books={this.state.books}
                            />
                            <br></br><br></br><hr></hr>
                            <SavedBooks 
                                books={this.state.saved_books}
                                handleDeleteEvent = {this.handleDeleteEvent}
                                />
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4" >
                            <ul className="list-group">
                                {
                                    
                                    response.length > 0 ?
                                        this.generateList(): <li className="list-group-item">loading...</li>
                                }
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
};

export default MainResult;