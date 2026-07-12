import { NavLink } from "react-router-dom";


export default function Navbar() {

return (

<header>

<nav>

<NavLink to="/">
Hem
</NavLink>

<NavLink to="/portfolio">
Portfolio
</NavLink>

<NavLink to="/cv">
CV
</NavLink>

<NavLink to="/about">
Om mig
</NavLink>

</nav>

</header>

);

}