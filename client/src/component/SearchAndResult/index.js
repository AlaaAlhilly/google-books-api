import React from 'react';
import Books from '../Books';
import SearchForm from '../SearchForm';
function SearchAndResult(props) {
    return (
        <div>
            <SearchForm 
                changeInputHandler={props.changeInputHandler}
                submitFormHandler={props.submitFormHandler}
            />
            <br></br><hr></hr>
            <Books
                    books={props.books}
                    handleSaveButton = {props.handleSaveButton}
            />
        </div>
    
    )
}
export default SearchAndResult;