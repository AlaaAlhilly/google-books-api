import React from 'react';

function SearchForm(props) {
    return (
    <div className="row">
    <div className="col-lg-12">
        <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title">
            <strong>
                <i className="fa fa-search" aria-hidden="true"></i> Search
            </strong>
            </h3>
        </div>
        <div className="panel-body">
            <form>
            <div className="form-group">
                <label htmlFor="topic">Book Title</label>
                <input
                    onChange={props.changeInputHandler}
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                />
            </div>
            <button
                onClick={props.submitFormHandler}
                className="btn btn-primary">
                Submit
            </button>
            </form>
            </div>
        </div>
    </div>
                   
</div>
    )
};

export default SearchForm;
