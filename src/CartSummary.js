import React, { Component, } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem,Badge } from "react-bootstrap";
import { 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,  
  NavLink, 
} from "reactstrap";

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
              <Badge color="" onClick={()=>this.props.removeFromCart(cartItem.product)}> X </Badge>
              {cartItem.product.productName}
              <Badge color=""> {cartItem.quantity} </Badge>  
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
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
