import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

import styles from "./styles.module.css";

class SmoothScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldScrollToTop: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const pageYOffset = window.pageYOffset;
      if (pageYOffset >= 500) {
        this.setState({ shouldScrollToTop: true });
      } else {
        this.setState({ shouldScrollToTop: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  scrollToTop() {
   
    window.scrollTo(0, 0);
  }

  render() {
    return (
      this.state.shouldScrollToTop && (
        <div
          className={styles.scroll_top}
          onClick={this.scrollToTop.bind(this)}
        >
          <AiOutlineArrowUp size={50} />
        </div>
      )
    );
  }
}

export default SmoothScroll
