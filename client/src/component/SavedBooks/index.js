import React from 'react';
import DBBooks from '../DBBooks';
function SavedBooks(props) {
return (
    <div className="row">
    <div className="col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i> Saved Books
            </strong>
          </h3>
        </div>
        <div className="panel-body">
          <DBBooks books={props.books}
                    handleDeleteButton = {props.handleDeleteEvent}
          />
        </div>
      </div>
    </div>
  </div>
    )
};
export default SavedBooks;
