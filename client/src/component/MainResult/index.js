import React, { Component } from 'react';
import SearchAndResult from '../SearchAndResult';
import Jumbotron from '../Jumbotron';
import API from '../../API';
import SavedBooks from '../SavedBooks';

class MainResult extends Component {
    state = {
        subject: "",
        books:[],
        saved_books:[]
    }
    componentDidMount() {
        this.getBooks();
        console.log(this.state.saved_books)
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
        console.log(this.state.subject);
        if (!this.state.subject) {
            alert("Fill out all the fields first");
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
        console.log(book_to_save);
        API.saveBooks(book_to_save)
            .then(this.getBooks)
            .catch(err => console.log(err));
    }

    handleDeleteEvent = (id) => {
        API.deleteBook(id)
            .then(this.getBooks)
            .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                <Jumbotron />
                <div className="container">
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
            </div>
        )
    }
};

export default MainResult;