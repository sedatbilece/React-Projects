import React from "react";




const Navbar =()=>{

return(<div>
<nav className="flex sm:justify-center space-x-4">
  {[
    ['Home', '/'],
    ['About', '/About'],
    ['Contact', '/Contact'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900">{title}</a>
  ))}
</nav>

</div>)

}

export default Navbar;