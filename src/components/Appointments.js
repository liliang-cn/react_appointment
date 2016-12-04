import React from 'react';

import AppointList from './AppointList';

const Appointments = ({appoints, handleDelete}) => {
    return (
        <div>
            <h1>预约列表</h1>
            <ul className="list-group"> 
            {
                appoints.map((appoint, index) => (
                    <li className="list-group-item" key={index}>
                        <AppointList appoint={appoint} handleDelete={handleDelete} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default Appointments;