import React, { Component } from "react";
import { Col, Container, Row, } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart:[] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart=(product) =>{
    let newCart=this.state.cart;
    var addedItem = newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
      this.setState({cart:newCart});
    } 

    removeFromCart=(product)=>{
      let newCart = this.state.cart.filter(c=>c.product.id!==product.id)
      this.setState({cart:newCart})
    }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    let naviInfo = { title: "Navi Bar" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}
          info={naviInfo} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>              

          </Row>
        </Container>
      </div>
    );
  }
}
