import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryTable from '../components/tables/CategoryTable';

export default class Resources extends React.Component {

    render() {
        return (
            <div className="rsrcContainer animated fadeIn">
                <nav>
                    <Navbar />
                </nav>

                <CategoryTable  />

                <Footer />
            </div>
        )
    }
}