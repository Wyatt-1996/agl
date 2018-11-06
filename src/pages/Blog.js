import React from "react";
import "../App.css";
// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Posts from "../components/blog/Posts";

// blog imgs
import one from '../imgs/lee.jpg';
import two from '../imgs/garcia.jpg';
import three from '../imgs/mountain.jpg';

export default class Blog extends React.Component {

  render() {

    const posts = [
      {
          id: 0,
          pic: one,
          title: "Reversing the Cylce",
          link: "https://agoodliving.com/blog/reverse"
      },
      {
        id: 1,
        pic: two,
        title: "Possibilities",
        link: "https://agoodliving.com/blog/possible"
      },
      {
        id: 2,
        pic: three,
        title: "Foreign Policy",
        link: "https://agoodliving.com/blog/foreign-policy"
      }
    ]

    return (
      <div className="animated fadeIn">
        <Navbar />

        <div className="blogContainer">
            <Posts posts={posts} />
        </div>

        <Footer />
      </div>
    );
  }
}
