import React from 'react';
import GoogleBooks from '../GoogleBooks';

function Books(props) {
    return (
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Books Received from google
              </strong>
            </h3>
          </div>
          <div className="panel-body">
              <GoogleBooks
                books={props.books} 
                handleSaveButton = {props.handleSaveButton}
                />
          </div>
        </div>
      </div>
    </div>
    )
};

export default Books;