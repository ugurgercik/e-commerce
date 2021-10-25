import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props) {
  //bu şekilde de props.title yazabiliriz -{this.props.title}--direkt h2 arasına da yazabiliriz
  // super(props);
  state = {
    categories: [
      { categoryId: 1, categoryName: "Elektronik" },
      { categoryId: 2, categoryName: "Moda ve Giyim" },
      { categoryId: 3, categoryName: "Kişisel Bakım ve Kozmetik" },
      { categoryId: 4, categoryName: "Bahçe Ev Ürünleri" },
      { categoryId: 5, categoryName: "Anne ve Bebek" },
    ],
    currentCategory: ""
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div>
        <h2> {this.props.info.title} </h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
