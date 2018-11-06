import React from 'react';
// import { Link } from 'react-router-dom';
import 'animate.css';
import '../App.css';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// imgs
// import globe from '../imgs/globe.png';
import arrow from '../imgs/arrow.png';

class About extends React.Component {

    render() {
        return (
            <div className="aboutContainer animated fadeIn">
                <nav>
                    <Navbar />
                </nav>

                <div className="abtRow1">
                    <h3 className="abtText">
                        "This website is here to give any people in the world the ability and motivation to learn how to do whatever they want in life."
                        <br></br>
                        - Founder, CEO
                    </h3>

                    <div className="abtMoreDiv">
                        <a className="abtMoreBtn" href="#">
                            <img className="abtMoreImg" src={arrow} alt="more-info"></img>
                            <h3 className="abtMoreTxt">More?</h3>
                        </a>
                    </div>

                </div>

                <Footer />
            </div>

        )
    }
}

export default About;