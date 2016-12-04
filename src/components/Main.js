import React, {Component} from 'react';

import Appointments from './Appointments';
import AddAppoint from './AddAppoint';

import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;

class Main extends Component {
    constructor() {
        super();
        this.state = {
            appoints: [],
            aptBodyVisible: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggleAptBody = this.handleToggleAptBody.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/data', {
            cancelToken: new CancelToken(c => cancel = c)
        })
        .then(response => {
            this.setState({
                appoints: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentWillUnmount() {
        cancel();
    }

    handleDelete(appointSelected) {
        let {appoints} = this.state;
        let newState = [];

        appoints.forEach((appoint, index) => {
            if (appointSelected === appoint.petName) {
                newState = [...appoints.slice(0, index), ...appoints.slice(index + 1)];
            }
        });

        this.setState({
            appoints: newState
        });
    }

    handleToggleAptBody() {
        this.setState({
            aptBodyVisible: !this.state.aptBodyVisible
        })
    }

    render() {
        return (
            <div>
                <AddAppoint toggleAptBody={this.handleToggleAptBody} aptBodyVisible={this.state.aptBodyVisible} />
                <Appointments appoints={this.state.appoints} handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Main;