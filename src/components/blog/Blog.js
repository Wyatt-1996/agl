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
          title: "Photography",
          link: "https://agoodliving.com/"
      },
      {
        id: 1,
        pic: two,
        title: "Modern Architecture",
        link: "https://agoodliving.com/"
      },
      {
        id: 2,
        pic: three,
        title: "Traveling",
        link: "https://agoodliving.com/"
      }
    ]

    return (
      <div className="animated fadeIn">
        <Navbar />

        <div className="blogContainer">
            <Posts posts={posts} />
        </div>

          {/* <form action="https://formspree.io/info@agoodliving.com" method="POST">
            <input type="text" name="name"></input>
            <input type="email" name="_replyto"></input>
            <input type="text" name="subject"></input>
            <textarea type="text" name="message"></textarea>
            <input type="submit" value="Send"></input>
          </form> */}

        <Footer />
      </div>
    );
  }
}
