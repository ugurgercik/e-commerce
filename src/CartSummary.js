import React, { Component, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge';
import { NavItem, } from "react-bootstrap";
import { 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,  
  NavLink,  
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle  caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge bg="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> X </Badge> 
              &nbsp; {cartItem.product.productName} &nbsp;
              <Badge bg="success" pill> {cartItem.quantity} </Badge> 
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart"> <Badge bg="primary"> Go to Cart </Badge> </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown> 
    );     
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink> Empty Cart </NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
