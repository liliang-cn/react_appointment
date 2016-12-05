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
                <label className="col-sm-2 control-label" htmlFor="petName">宠物名字</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="petName" ref={petName => inputPetName = petName} placeholder="宠物的名字" required />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="petOwner">主人</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="petOwner" ref={ownerName => inputOwnerName = ownerName} placeholder="宠物的主人" required />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="aptDate">日期</label>
                <div className="col-sm-4">
                    <input type="date" className="form-control"
                        id="aptDate" ref={aptDate => inputAptDate = aptDate} required />
                </div>
                <label className="col-sm-2 control-label" htmlFor="aptTime">时间</label>
                <div className="col-sm-4">
                    <input type="time" className="form-control"
                        id="aptTime" ref={aptTime => inputAptTime = aptTime} required />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="aptNotes">病情</label>
                <div className="col-sm-10">
                    <textarea className="form-control" rows="4" cols="50"
                        id="aptNotes" ref={aptNotes => inputAptNotes = aptNotes} placeholder="症状描述" required></textarea>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary pull-right">新增预约</button>
                </div>
            </div>
        </form>
    </div>
);

export default AddAppointBody;