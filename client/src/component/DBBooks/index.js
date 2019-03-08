import React from 'react';

function DBBooks(props) {
    let books = [];
    props.books.forEach(book => {
        books.push(
            <li key = {book._id } className="list-group-item">
                 <div className="panel panel-primary">
                    <div className="panel-heading"><h1>{book.title}</h1></div>
                    <div className="panel-body">{book.desc}
                    <p style={{backgroundColor:"darkgray"}}>Published at: {book.date}</p>
                    <hr>
                    </hr>
                        <span className="btn-group pull-right">
                        <a rel="noopener noreferrer" href={book.url} target="_blank">
                            <button className="btn btn-default ">Visit IT</button>
                        </a>
                        <button className="btn btn-primary" onClick={() => props.handleDeleteButton(book._id)}>Delete IT</button>
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
export default DBBooks;
