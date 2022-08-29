import { Link, Outlet } from "react-router-dom"
import Logo from "../images/logo.png"

const Layout = () => {
     return(
          <div className="Wrap">
               <header>
                    <div className="innerBox">
                         <ul id="nav">
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/portfolio">Portfolio</Link></li>
                              <li><Link to="/"><img src={Logo}/></Link></li>
                              <li><Link to="/todo">Todo</Link></li>
                              <li><Link to="/skill">Skill</Link></li>
                         </ul>
                    </div>
               </header>
               <Outlet />
                    <footer>
                         <div>test</div>
                    </footer>
          </div>
     )
}
export default Layout;