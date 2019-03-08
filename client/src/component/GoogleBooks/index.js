import React from 'react';

function GoogleBooks(props) {
    let books = [];
    props.books.forEach(book => {
        books.push(
            <li key = {book.id } className="list-group-item">
                 <div className="panel panel-primary">
                    <div className="panel-heading"><h1>{book.volumeInfo.title}</h1></div>
                    <div className="panel-body">{book.volumeInfo.description}
                    <p style={{backgroundColor:"darkgray"}}>Published at: {book.volumeInfo.publishedDate}</p>

                    <hr>
                        </hr>
                        <span className="btn-group pull-right">
                        <a rel="noopener noreferrer" href={book.volumeInfo.previewLink} target="_blank">
                            <button className="btn btn-default ">Visit IT</button>
                        </a>
                        <button className="btn btn-primary" onClick={() => props.handleSaveButton(book.id)}>Save IT</button>
                            <hr></hr>
                        </span>
                    </div>
                </div>
                    
                
            </li>
        )
    });
    return (
        <div>
            {books}
        </div>    
    )
}
export default GoogleBooks;


// description: "This book covers: 1. Basic programming concepts - assuming no prior knowledge of programming beyond an ability to create a web page using HTML & CSS ; 2. Core elements of the JavaScript language - so you can learn how to write your own scripts from scratch ; 3. jQuery - which will allow you to simplify the process of writing scripts (this is introduced half-way through the book once you have a solid understanding of JavaScript) ; 4. How to recreate techniques you will have seen on other web sites such as sliders, content filters, form validation, updating content using Ajax, and more. Each chapter: Breaks subjects down into bite-sized chunks with a new topic on each page ; Contains clear descriptions of syntax, each one demonstrated with inspiring code samples ; Uses diagrams and photography to explain complex concepts in a visual way. This book enables you to use & customize thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web as well as create your own scripts from scratch."
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=_uTRAwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=_uTRAwAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "http://books.google.com/books?id=_uTRAwAAQBAJ&dq=javascript&hl=&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 640
// panelizationSummary:
// containsEpubBubbles: false
// containsImageBubbles: false
// __proto__: Object
// previewLink: "http://books.google.com/books?id=_uTRAwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=1&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2014-07-21"
// publisher: "John Wiley & Sons"
// readingModes: {text: false, image: true}
// subtitle: "Interactive Front-End Web Development Hardcover"
// title: "JavaScript and JQuery"