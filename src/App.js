import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {

  state={currentCategory:""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render(){
  let categoryInfo={title:"Kategori listesi"};
  let productInfo={title:"Ürün listesi"};
  let naviInfo={title:"Navi Bar"};
    return (
        <div>
          <Container>
            <Row>
              <Navi info={naviInfo}/>
            </Row>
            <Row>
              <Col xs="3">         
                <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
              </Col>
              <Col xs="9">           
                <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
              </Col>
            </Row>
          </Container>
        </div>
      );

  }

}



