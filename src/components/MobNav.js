import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class MobNav extends React.Component {

    render() {
        return (
            <ul className="mobNavUl">
                <li className="mobNavUlitem">
                    <Link to="/" className="mobNavLink mobNavHome">
                        aGL
                    </Link>
                </li>
                <li className="mobNavUlitem">
                    <Link to="/blog" className="mobNavLink mobNavBlog">
                        blog
                    </Link>
                </li>
                <li className="mobNavUlitem">
                    <span className="mobNavLink mobNavSearch" uk-icon="search"></span>
                </li>
            </ul>
        )
    }
}