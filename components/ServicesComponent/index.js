import React from "react";

import styles from "./styles.module.css";

export default class ServicesComponent extends React.Component {
  constructor(props) {
    super();
    this.state = { categories: [], isLoading: true };
    this.pickService = this.pickService.bind(this);
  }

  componentDidMount() {
    const listCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      const newData = data.data.map((item) => {
        return { ...item, active: false };
      });

      this.setState({ categories: newData });
      this.setState({ isLoading: false });
    };
    listCategories();
  }

  pickService(servicePickedId) {
    const pickedCategoryArray = this.state.categories.map((category) => {
      if (category._id === servicePickedId) {
        category.active = !category.active;
      }
      return category;
    });

    const pickedCategoriesCount = pickedCategoryArray.reduce(
      (acc, currentCategory) => {
        if (currentCategory.active === true) {
          acc++;
        }
        return acc;
      },
      0
    );
    if (pickedCategoriesCount) {
      this.props.setServicePicked(true);
    } else {
      this.props.setServicePicked(false);
    }
    this.setState({ categories: pickedCategoryArray });

    this.props.setScheduledCategories(
      pickedCategoryArray.filter((category) => {
        return category.active;
      })
    );
  }

  if(isLoading) {
    return (
      <p style={{ textAlign: "center", display: "block", padding: "10px" }}>
        Service options are loading...
      </p>
    );
  }

  render() {
    return (
      <form className={styles.checkbox_container}>
        <div className={styles.service_container}>
          {this.state.categories.map((category, index) => {
            return (
              <div key={index} className={styles.listItem}>
                <input
                  className={styles.input}
                  type="checkbox"
                  checked={category.active}
                  onChange={() => this.pickService(category._id)}
                  style={{ listStyle: "none" }}
                  key={index}
                />
                {category.name}
              </div>
            );
          })}
        </div>
      </form>
    );
  }
}
