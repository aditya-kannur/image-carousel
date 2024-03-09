import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    } 
  }

  moveLeft = () => {
    if(this.state.index === 0) {
      this.setState({
        index: images.length - 1
      })
    } else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  moveRight = () => {
    if (this.state.index >= images.length - 1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render() {
    const { index } = this.state;
    return(
      <div className="carousel-container">
        <div className="carousel-content">
          <img className="carousel-image" src={images[index].img} alt="images" />
          <div className="carousel-title">{images[index].title}</div>
          <div className="carousel-subtitle">{images[index].subtitle}</div>
        </div>
        <div className="carousel-arrow carousel-arrow-left" onClick={this.moveLeft}>
          <ArrowBackIosIcon />
        </div>
        <div className="carousel-arrow carousel-arrow-right" onClick={this.moveRight}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    )
  }
}

export default Carousel;
