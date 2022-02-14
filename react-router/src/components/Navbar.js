import React from "react";
import {Link,NavLink} from 'react-router-dom';




const Navbar =()=>{

return(<div>
<nav className="flex sm:justify-center space-x-4 mt-5">
  {[
    ['Home', '/'],
    ['About', '/About'],
    ['Contact', '/Contact'],
    ['Cards','/Card']
  ].map(([title, url]) => (
    <NavLink to={url} className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 ">{title}</NavLink>
  ))}
</nav>

</div>)

}
// Link NavLink farkı : render esnasında NavLinkte <a> tagine class="active" eklenir css için kullanılabilir

export default Navbar;