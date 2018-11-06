import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Navbar extends React.Component {

    constructor() {
        super();
        this.state = { showNav: false }
    }

    toggleNav = () => {
        if(this.state.showNav === false) {
            this.setState({
                showNav: true
            });
            // document.querySelector('#more').classList.add('open');
        } else {
            this.setState({
                showNav: false
            });
            // document.querySelector('#more').classList.remove('open');
        }
    }

    render() {
        return (
            <ul className="webNavUl">
                <li className="webNavUlitem">
                    <Link to="/" id="home" className={window.location.pathname === "/" ? "webNavLink webNavHome active" : "webNavLink webNavHome"}>
                    🌎 aGoodLiving
                    </Link>
                </li>
                <span className="webNavMiddle">
                    <li className="webNavUlitem">
                        <Link to="/blog" className={window.location.pathname === "/blog" ? "webNavLink webNavBlog active" : "webNavLink webNavBlog"}>
                            blog
                    </Link>
                    </li>
                    <li className="webNavUlitem">
                        <Link to="/courses" className={window.location.pathname === "/courses" ? "webNavLink webNavCourses active" : "webNavLink webNavCourses"}>
                            courses
                    </Link>

                    </li>
                    <li className="webNavUlitem">
                        <Link to="/resources" className={window.location.pathname === "/resources" ? "webNavLink webNavRes active" : "webNavLink webNavRes"}>
                            resources
                    </Link>

                    </li>
                    <li className="webNavUlitem">
                        <Link to="/about" className={window.location.pathname === "/about" ? "webNavLink webNavAbout active" : "webNavLink webNavAbout"}>
                            about
                    </Link>
                    </li>
                </span>
                <li className="webNavUlitem">
                    <span className="webNavLink webNavSearch" uk-icon="search"></span>
                </li>
            </ul>
        )
    }
}