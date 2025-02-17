import Login from "./Login"
import { useState } from "react";

const Nav = () => {

  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
  <nav className="flex justify-between items-center px-5">
     <a className="text-indigo-50 font-semibold uppercase" href="#login" onClick={() => setLoginOpen(true)}>Login</a>
     {isLoginOpen && <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}/>}
    <form>
      <input className="rounded-sm p-2 min-w-[22rem] translate-x-10" 
      type="text" 
      id="search-input" 
      placeholder="Search events, groups"/>
    </form>
    <img src="/icons/Fr.CRCE Name.svg" className="w-[10rem]"/>
  </nav>
  )
  
}

export default Nav