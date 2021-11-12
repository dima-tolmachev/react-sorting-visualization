import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
  return (
    <div>
      <Nav style={{position:"absolute", top: "1em", right:"1em"}}>
        <NavItem>
          <NavLink>Quick</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Merge</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Bubble</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Heap</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>(New)</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"white", backgroundColor:"blue", border:"2em", borderRadius:"10px", right:"0"}}>Source code</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Menu;