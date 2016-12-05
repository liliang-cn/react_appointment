import React, {Component} from 'react';

import Appointments from './Appointments';
import AddAppoint from './AddAppoint';
import Search from './Search';

import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;

const baseURL = 'https://api.mlab.com/api/1/databases/react_appointments/collections/appoint/';
const APIKey = '?apiKey=dlxA3ogbuj1RKf1wcqr_2_8MCtm15Kn0';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            appoints: [],
            orderBy: 'petName',
            orderDir: 'asc',
            aptBodyVisible: false,
            query: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggleAptBody = this.handleToggleAptBody.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        cancel();
    }

    fetchData() {
        axios.get(`${baseURL}${APIKey}`, {
            cancelToken: new CancelToken(c => cancel = c)
        })
        .then(response => {
            this.setState({
                appoints: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleDelete(appointSelected) {
        // const {appoints} = this.state;
        // let newState = [];

        // appoints.forEach((appoint, index) => {
        //     if (appointSelected === appoint.petName) {
        //         newState = [...appoints.slice(0, index), ...appoints.slice(index + 1)];
        //     }
        // });

        // this.setState({
        //     appoints: newState
        // });
        const id = appointSelected._id.$oid;
        axios.delete(`${baseURL}${id}${APIKey}`)
            .then(() => this.fetchData());
    }

    handleToggleAptBody() {
        this.setState({
            aptBodyVisible: !this.state.aptBodyVisible
        });
    }

    handleAdd(newAppoint) {
        axios({
            method: 'post',
            url: `${baseURL}${APIKey}`,
            data: newAppoint
        })
        .then(() => {
            this.fetchData();
            this.handleToggleAptBody();
        });
        
        // this.setState({
        //     appoints: this.state.appoints.concat(newAppoint)
        // });
    }

    handleSort(orderBy) {
       this.setState({
           orderBy
       });
    }

    handleOrder(orderDir) {
        this.setState({
           orderDir
       });
    }

    handleSearch(query) {
        this.setState({
            query
        });
    }

    sortAppoints(arr, by, dir) {
        if (arr) {
            return arr.sort((apt1,apt2) => {
                const value1 = apt1[by].toLowerCase();
                const value2 = apt2[by].toLowerCase();
                if (value1 < value2) {
                    return dir === 'asc' ? -1 : 1;
                } else if (value1 > value2) {
                    return dir === 'asc' ? 1 : -1;
                } else {
                    return 0;
                }
            });
        }
    }

    searchAppoints(arr, query) {
        const filteredAppoints = [];
        if (arr) {
            if (!query) {
                return arr;
            } else {
                arr.forEach(item => {
                    if (item.petName.toLowerCase().indexOf(query) !== -1 || 
                        item.ownerName.toLowerCase().indexOf(query) !== -1 ||
                        item.aptDate.toLowerCase().indexOf(query) !== -1 ||
                        item.aptNotes.toLowerCase().indexOf(query) !== -1) {
                        filteredAppoints.push(item);
                    }
                });
                return filteredAppoints;
            }
        }
    }

    render() {
        const {appoints, orderBy, orderDir, aptBodyVisible, query} = this.state;
        const filteredAppoints = this.searchAppoints(appoints, query) || [];
        const sortedAppoints = this.sortAppoints(filteredAppoints, orderBy, orderDir) || [];
        return (
            <div>
                <AddAppoint 
                    toggleAptBody={this.handleToggleAptBody} 
                    aptBodyVisible={aptBodyVisible} 
                    handleAdd={this.handleAdd}
                />
                <Search 
                    orderBy={orderBy}
                    orderDir={orderDir}
                    handleSort={this.handleSort}
                    handleOrder={this.handleOrder}
                    handleSearch={this.handleSearch}
                />
                <Appointments appoints={sortedAppoints} handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Main;