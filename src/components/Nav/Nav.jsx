import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const routes = [
    { path: '/', id: 'home', name: 'Home' },
    { path: '/about', id: 'about', name: 'About Us' },
    { path: '/products', id: 'products', name: 'Our Products' },
    { path: '/products/:id', id: 'productDetails', name: 'Product Details' },
    { path: '*', id: 'notFound', name: 'Not Found' },
  ];

  return (

    <div className="flex justify-center items-center gap-5">
      <AiOutlineMenu></AiOutlineMenu>
      <nav className="lg:container mx-auto">
      <ul className="md:flex md:gap-3">
      {routes.map((route) => (
        <Link key={route.id} route={route}></Link>
      ))}
      </ul>
    </nav>
    </div>
  );
};

export default Nav;
