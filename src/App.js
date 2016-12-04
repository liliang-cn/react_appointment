import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <Navbar />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <Main />
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <Footer />
            </div>
        </div>
    </div>
);

export default App;
