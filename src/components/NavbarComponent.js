import { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';
import {Link} from 'react-router-dom';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      display: 'block', width: "100%", padding: 30
    }}>
      <Navbar body inverse className='navbar-item' light expand="md">
        <NavbarBrand body inverse className='navbar-item' tag={Link} to="/">BESTFLIX</NavbarBrand>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink className='navbar-item' tag={Link} to="/">Ana Sayfa</NavLink>
            </NavItem>
            <UncontrolledDropdown className='navbar-item' nav inNavbar>
              <DropdownToggle className='navbar-item' nav caret>
                Filmler
              </DropdownToggle>
              <DropdownMenu className='dropdownmenu-custom' right>
                <DropdownItem className='dropdownmenu-custom'>
                  <NavLink className='navlink' tag={Link} to="/filmler/yerli">Yerli Filmler</NavLink>
                </DropdownItem>
                <DropdownItem className='dropdownmenu-custom'>
                  <NavLink className='navlink' tag={Link} to="/filmler/yabanci">Yabancı Filmler</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='navbar-item' nav caret>
                Diziler
              </DropdownToggle>
              <DropdownMenu className='dropdownmenu-custom' right>
                <DropdownItem className='dropdownmenu-custom'>
                  <NavLink className='navlink' tag={Link} to="/diziler/yerli">Yerli Diziler</NavLink>
                </DropdownItem>
                <DropdownItem className='dropdownmenu-custom'>
                  <NavLink className='navlink' tag={Link} to="/diziler/yabanci">Yabancı Diziler</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className='navbar-item' tag={Link} to="/belgeseller">Belgeseller</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default NavbarComponent;
