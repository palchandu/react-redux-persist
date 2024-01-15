import {
  NavLink,
  redirect,
} from "react-router-dom";
import '../../css/homePage.css'
export const Header = () => {
  return (
      <>
          <nav class="navbar navbar-expand-lg " style={{ "backgroundColor": "#e3f2fd"}}>
              <div class="container-fluid flex-row">
                <div className='brand'>
                      <a class="navbar-brand" href="#"><img src='/src/assets/Hello.png' style={{ width: "15vw", height:"10vh"}}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                    <li class="nav-item">
                        <NavLink to="/"  className={({ isActive, isPending }) =>isActive? "active nav-link": isPending? "pending nav-link": "nav-link"}>Home</NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/task-manager"  className={({ isActive, isPending }) =>isActive? "active nav-link": isPending? "pending nav-link": "nav-link"}>Task Manager</NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/parser"  className={({ isActive, isPending }) =>isActive? "active nav-link": isPending? "pending nav-link": "nav-link"}>Url Parser</NavLink>
                    </li>
                        <li class="nav-item">
                        <NavLink to="/encoder"  className={({ isActive, isPending }) =>isActive? "active nav-link": isPending? "pending nav-link": "nav-link"}>Base64 Generator</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
      </>
  )
}
