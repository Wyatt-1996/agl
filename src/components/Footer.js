import React from 'react';
import { Link } from 'react-router-dom';

import ig from '../imgs/ig.png';
import twitter from '../imgs/twitter.png';
import fb from '../imgs/fb.png';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footerDiv">

                <div className="footerContent">


                    <div className="footerCol1">
                        <Link to="/" className="footerLogo">aGoodLiving</Link>
                        <p className="ftCopy">&copy;2018 - aGoodLiving, LLC</p>
                    </div>

                    <div className="footerCol2">
                        <h1 className="footerContact">Contact:</h1>
                        <a className="ftMailTo" href="mailto:info@agoodliving.com">info@agoodliving.com</a>
                        <ul className="socialUl">
                            <li>
                                <a href="https://instagram.com/agood.living" target="_blank">
                                    <img className="socialIcon ig" src={ig} alt="instagram"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/agoodliving" target="_blank">
                                    <img className="socialIcon fb" src={fb} alt="facebook"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/agoodliving1" target="_blank">
                                    <img className="socialIcon tw" src={twitter} alt="twitter"></img>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footerCol3">
                        <Link to="/blog" className={window.location.pathname === "/blog" ? "ftNavLink ftNavBlog ftActive" : "ftNavLink ftNavBlog"} >
                            blog
                        </Link>
                        <Link to="/courses" className={window.location.pathname === "/courses" ? "ftNavLink ftNavCourses ftActive" : "ftNavLink ftNavCourses"} >
                            courses
                        </Link>
                        <Link to="/resources" className={window.location.pathname === "/resources" ? "ftNavLink ftNavResources ftActive" : "ftNavLink ftNavResources"}>
                            resources
                        </Link>
                        <Link to="/about" className={window.location.pathname === "/about" ? "ftNavLink ftNavAbout ftActive" : "ftNavLink ftNavAbout"}>
                            about
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}