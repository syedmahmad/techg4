/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
export default function Header() {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a className="navbar-brand" href="/">
                                {/* <span>BigWing</span> */}
                                <img src="images/techg4.png" width={225} alt="techG4"></img>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <div className="d-flex  flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                            <a className="nav-link" href="/">
                                                Home <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about">
                                                About{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/service">
                                                Services{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">
                                                Contact
                                            </a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                {" "}
                                                Login
                                            </a>
                                        </li> */}
                                    </ul>
                                    {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                        <button
                                            className="btn  my-2 my-sm-0 nav_search-btn"
                                            type="submit"
                                        />
                                    </form> */}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}