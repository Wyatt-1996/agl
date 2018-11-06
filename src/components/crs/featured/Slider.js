import React from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

import one from "../../../imgs/mountain.jpg";
import two from "../../../imgs/garcia.jpg";
import tre from "../../../imgs/art.jpg";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: 0,
          pic: "https://images.pexels.com/photos/1027393/pexels-photo-1027393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Global Geography",
          link: "https://wyattsommer.com",
          free: true
        },
        {
          id: 1,
          pic: "https://images.pexels.com/photos/1194408/pexels-photo-1194408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Cherry Garcia",
          link: "https://wyattsommer.com",
          free: false
        },
        {
          id: 2,
          pic: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Architecture 101",
          link: "https://wyattsommer.com",
          free: false
        }
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="ftdCourseSlider">
        <div
          className="slider-wrapper"
        //   style={{
        //     transform: `translateX(${this.state.translateValue}px)`,
        //     transition: "transform ease-out 0.45s"
        //   }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image.pic} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
