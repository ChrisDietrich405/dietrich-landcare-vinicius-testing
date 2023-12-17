import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./styles.module.css";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: 0, select: this.props.images[0] };
  }

  componentDidMount() {
    this.preload();
    this.startSlideshow();
  }

  componentWillUnmount() {
    clearInterval(this.siSlideshow);
  }

  preload() {
    this.props.images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }

  startSlideshow() {
    this.siSlideshow = setInterval(() => {
      this.nextSlideShow();
    }, 3000);
  }

  nextSlideShow = () => {
    let nextSlide = this.state.position + 1;
    if (nextSlide >= this.props.images.length) {
      nextSlide = 0;
    }
    this.setState({
      position: nextSlide,
      select: this.props.images[nextSlide],
    });
  };

  prevSlideShow = () => {
    let prevSlide = this.state.position - 1;
    if (prevSlide < 0) {
      prevSlide = this.props.images.length - 1;
    }
    this.setState({
      position: prevSlide,
      select: this.props.images[prevSlide],
    });
  };

  render() {
    return (
      <div className={styles.slide_show_container}>
        <div className={styles.darken} />
        <div
          className={styles.slide_show}
          style={{
            backgroundImage: `url(${this.state.select.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className={styles.arrow_left_container}>
            <AiOutlineArrowLeft
              className={styles.arrow_left}
              onClick={this.prevSlideShow}
            />
          </div>
          <div className={styles.gradient}>
            <h3 className={styles.slideshow_h3}>{this.state.select.title}</h3>
          </div>
          <div className={styles.arrow_right_container}>
            <AiOutlineArrowRight
              className={styles.arrow_right}
              onClick={this.nextSlideShow}
            />
          </div>
        </div>
      </div>
    );
  }
}
