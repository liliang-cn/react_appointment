import React from 'react';

const AppointList = ({appoint, handleDelete}) => {
    return (
        <div className="row">
            <div className="col-md-1 col-sm-2 col-xs-2">
                <button type="button" className="btn btn-danger btn-sx" onClick={() => {handleDelete(appoint.petName)}}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
            </div>
            <div className="col-md-11 col-sm-10 col-xs-10">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        {appoint.petName}
                        <span className="pull-right">
                            {appoint.aptDate}
                        </span>
                    </div>
                    <div className="panel-body">
                        {appoint.aptNotes}
                    </div>
                    <div className="panel-footer">
                        Owner: {appoint.ownerName}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointList;