
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown, DropdownItem } from 'flowbite-react';
import { NavLink, Link } from 'react-router-dom';
import { FcShop } from "react-icons/fc";
import { useAuth } from '../../Context/auth';
import { toast } from 'react-toastify';

function Header() {
  const [auth, setAuth] = useAuth()
  const handleLogout = () => {
    if (auth.user === undefined || auth.user === null) {
      setAuth({
        ...auth,
        user: null,
        token: ""
      });
    }
    localStorage.removeItem('auth')
    toast.success("Logout Sucessfully");

  }
  return (
    <>
      <Navbar fluid rounded className=' shadow-md shadow-gray-600 p-3'>
        <Link as={NavLink} to="/" className=' flex flex-row gap-x-3 justify-center items-center'><FcShop className=' w-12 h-12' />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-Roboto"> ECOMMERCE APP</span>
        </Link>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={NavLink} to="/" active>
            HOME
          </NavbarLink>
          <NavbarLink as={NavLink} to="/category">
            CATEGORY
          </NavbarLink>
          {(!auth.user) ? (<><NavbarLink as={NavLink} to="/register">
            REGISTER
          </NavbarLink>
            <NavbarLink as={NavLink} to="/login">
              LOGIN
            </NavbarLink>
          </>) : (<>
            <Dropdown label={auth?.user?.name} inline>
              <DropdownItem> <NavbarLink as={NavLink} to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user"}`}>
              DASHBOARD
            </NavbarLink></DropdownItem>
            <DropdownItem> <NavbarLink onClick={handleLogout} as={NavLink} to="/login">
              LOGOUT
            </NavbarLink></DropdownItem>             
            </Dropdown>
            </>)}

          <NavbarLink as={NavLink} to="/cart">
            CART (0)
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Header;
