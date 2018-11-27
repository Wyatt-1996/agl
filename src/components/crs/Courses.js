import React from 'react';
// import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';

// components
import Navbar from '../Navbar';
// import CategoryTable from '../components/tables/CategoryTable';
import FtdCoursesSlider from './featured/Slider';
import Footer from '../Footer';
// imgs
import one from '../imgs/mountain.jpg';
import two from '../imgs/garcia.jpg';
import tre from '../imgs/art.jpg';

export default class Courses extends React.Component {


    render() {

        // const crsList = [
        //     {
        //         id: 0,
        //         pic: one,
        //         title: "Global Geography",
        //         link: "https://wyattsommer.com",
        //         free: true
        //     },
        //     {
        //         id: 1,
        //         pic: two,
        //         title: "Cherry Garcia",
        //         link: "https://wyattsommer.com",
        //         free: false
        //     },
        //     {
        //         id: 2,
        //         pic: tre,
        //         title: "Architecture 101",
        //         link: "https://wyattsommer.com",
        //         free: false
        //     },
        

        // const categories= [
        //     {
        //         id: 0,
        //         pic: one,
        //         title: "Reversing the Cylce",
        //         link: "https://agoodliving.com/blog/reverse"
        //     },
        //     {
        //       id: 1,
        //       pic: one,
        //       title: "Possibilities",
        //       link: "https://agoodliving.com/blog/possible"
        //     },
        //     {
        //       id: 2,
        //       pic: one,
        //       title: "Foreign Policy",
        //       link: "https://agoodliving.com/blog/foreign-policy"
        //     }
        //   ]
        
        return (
            <div className="animated fadeIn">
                <nav>
                    <Navbar />
                </nav>
                
                {/* <h1 className="ftdTitle">Featured</h1>
                
                <FtdCoursesSlider/> */}


                {/* <h1 className="allTitle">All Courses</h1> */}
                {/* <CategoryTable categories={categories} /> */}

                <Footer />

            </div>
        )
    }
}