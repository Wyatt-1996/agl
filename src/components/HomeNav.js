import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class HomeNav extends React.Component {

    render() {
        return (
            <ul className="homeNavUl">
                <li className="homeNavUlitem">
                    <Link to="/blog" className="homeNavLink">
                        blog
                        </Link>
                </li>
                <li className="homeNavUlitem">
                    <Link to="/courses" className="homeNavLink">
                        courses
                        </Link>

                </li>
                <li className="homeNavUlitem">
                    <Link to="/resources" className="homeNavLink">
                        resources
                        </Link>
                </li>
                <li className="homeNavUlitem">
                    <Link to="/about" className="homeNavLink">
                        about
                        </Link>
                </li>
            </ul>
        )
    }
}