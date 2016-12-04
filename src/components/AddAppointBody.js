import React from 'react';

let inputPetName = null,
    inputOwnerName = null,
    inputAptDate = null,
    inputAptTime = null,
    inputAptNotes = null;

const AddAppointBody = ({handleAdd}) => (
    <div className="panel-body">
        <form className="form-horizontal" onSubmit={e => {
            e.preventDefault();
            handleAdd({
                petName: inputPetName.value,
                ownerName: inputOwnerName.value,
                aptDate: inputAptDate.value,
                aptTime: inputAptTime.value,
                aptNotes: inputAptNotes.value
            });
        }}>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="petName" ref={petName => inputPetName = petName} placeholder="Pet's Name" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="petOwner" ref={ownerName => inputOwnerName = ownerName} placeholder="Owner's Name" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
                <div className="col-sm-4">
                    <input type="date" className="form-control"
                        id="aptDate" ref={aptDate => inputAptDate = aptDate} />
                </div>
                <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
                <div className="col-sm-4">
                    <input type="time" className="form-control"
                        id="aptTime" ref={aptTime => inputAptTime = aptTime}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
                <div className="col-sm-10">
                    <textarea className="form-control" rows="4" cols="50"
                        id="aptNotes" ref={aptNotes => inputAptNotes = aptNotes} placeholder="Appointment Notes"></textarea>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
                </div>
            </div>
        </form>
    </div>
);

export default AddAppointBody;