import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";
const navigation = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
export default function Navbar() {
const [MenuBtn,setMenuBtn] = useState(false)
  return (
    <nav className="flex justify-between mx-10">
      <span className="flex gap-6" onClick={() => setMenuBtn(!MenuBtn)}>
        {(MenuBtn) ? <X className="md:hidden"/> : <Menu className="md:hidden"/>}
        <h1>My Navbar</h1>
      </span>
      <ol className="flex">
        {navigation.map(route => <Link key={route.id} route={route}></Link>)}
        {/* {navigation.map(route => 
        <li className="mr-8">
          <a href={route.path}>{route.name}</a>
        </li>)} */}
      </ol>
      <button>Signin</button>
    </nav>
  );
}
