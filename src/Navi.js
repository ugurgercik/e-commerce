import React, {  } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

export default class Navi extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state={
            isOpen:false
        };
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
     return (
    <div>
      <Navbar  color="light" light expand="md" >
        <NavbarBrand href="/">E-Shopping App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Cart - {this.props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Product 1
                </DropdownItem>
                <DropdownItem>
                  Product 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>    
         
        </Collapse>
        
      </Navbar>
    </div>
  );

  }
  }