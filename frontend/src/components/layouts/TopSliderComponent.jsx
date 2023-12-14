import { useEffect } from "react";
import SliderComponent from "./SliderComponent";
const TopSliderComponent = () => {
    const initializeSideMenu=()=>{
        document.addEventListener("DOMContentLoaded", function(){
           if (window.innerWidth < 992) {
               document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
                   element.addEventListener('click', function (e) {
                       let nextEl = element.nextElementSibling;
                       let parentEl  = element.parentElement;
                       let allSubmenus_array =	parentEl.querySelectorAll('.submenu');
                       if(nextEl && nextEl.classList.contains('submenu')) {	
                           e.preventDefault();	
                           if(nextEl.style.display == 'block'){
                               nextEl.style.display = 'none';
                           } else {
                               nextEl.style.display = 'block';
                           }
                       }
                   });
               })
           }
           }); 
    }
    useEffect(()=>{
        initializeSideMenu();
    }, []);
    return (
        <div className='mr-5 ml-5 mb-0 mt-0 pb-0 pt-0'>
            <div className="row  mb-0 mt-0 pb-0 pt-0">
                <div className='col-md-2 front-sidebar'>
                    <nav className="sidebar card py-2 mb-4">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Link name </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Submenu links <b className="float-end">&raquo;</b> </a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="nav-link" href="#">Submenu item 1 </a></li>
                                    <li><a className="nav-link" href="#">Submenu item 2 </a></li>
                                    <li><a className="nav-link" href="#">Submenu item 3 </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Treeview category <b className="float-end">&raquo;</b> </a>
                                <ul className="submenu dropdown-menu">
                                    <li><a className="nav-link" href="#">Submenu item 1 </a></li>
                                    <li><a className="nav-link" href="#">Submenu item 2 </a></li>
                                    <li><a className="nav-link" href="#">Submenu item 3 <b className="float-end">&raquo;</b> </a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="nav-link" href="#">Multi level 1</a></li>
                                            <li><a className="nav-link" href="#">Multi level 2</a></li>
                                            <li><a className="nav-link" href="#">Multi level 3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Another page </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Demo link </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-10">
                    <SliderComponent /> 
                </div>
            </div>
        </div>
    );
}

export default TopSliderComponent;