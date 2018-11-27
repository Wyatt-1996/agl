import React from 'react';
import '../App.css';
// components
import HomeNav from '../components/HomeNav';
// imgs
import down from '../imgs/downBtn.png';

class Home extends React.Component {

    render() {
        return (
            <div className="animated fadeIn">
                <h1 className="homeTitle">aGoodLiving</h1>
                <HomeNav />
                <img className="homeDownBtn" src={down} alt="view more"></img>
                {/* <span className="homeScrollBtn" uk-icon="chevron-down"></span> */}
            </div>


        )
    }
}

export default Home;