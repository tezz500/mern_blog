import { Link } from "react-router-dom"
const TopNavigationComponent = () => {
    return (
        <div className="top-navigation">
            <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
                <div className="collapse navbar-collapse ml-2 mr-2" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link p-0 m-0" to="#">Thulo.Com for Business is your strategic</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  p-0 ml-5">Login</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link p-0 ml-2 mr-2">OR</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link p-0 m-0">Register A New Account</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Support Center</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-2 p-0 ">|</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Buyer's Guide</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-2 p-0 ">|</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Gift Certificates</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-2 p-0 ">|</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Browse Brands</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-2 p-0 ">|</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Become a Seller</Link>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link mr-2 p-0 ">|</p>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-2 p-0 ">Support Center</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default TopNavigationComponent;