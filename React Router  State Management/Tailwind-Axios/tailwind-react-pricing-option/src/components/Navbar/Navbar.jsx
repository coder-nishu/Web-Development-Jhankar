import Link from "./Link";
export default function Navbar() {
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
  return (
    <div>
      <ol className="flex">
        {navigation.map(route => <Link key={route.id} route={route}></Link>)}
        {/* {navigation.map(route => 
        <li className="mr-8">
          <a href={route.path}>{route.name}</a>
        </li>)} */}
      </ol>
    </div>
  );
}
