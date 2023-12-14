import { Link } from "react-router-dom";
const HeaderNavigationComponent = () => {
    return (
        <div className="header-navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand ml-5" to="#">React Tutorials</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form class="form-inline mr-auto">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success main-btn-color" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mr-5">
                            <Link className="nav-link" to={'login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNavigationComponent;