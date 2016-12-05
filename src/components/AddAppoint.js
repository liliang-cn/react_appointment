import React from 'react';

import AddAppointBody from './AddAppointBody';

const AddAppoint = ({toggleAptBody, aptBodyVisible, handleAdd}) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading" onClick={toggleAptBody}>
                <span className="glyphicon glyphicon-plus"></span> 新的预约
            </div>
            {
                aptBodyVisible ? <AddAppointBody handleAdd={handleAdd}/> : ''
            }
        </div>
    );
};

export default AddAppoint;