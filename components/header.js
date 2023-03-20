/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [btnClick, setBtnClick] = useState(false);
  const handleClick = () => {
    setBtnClick((prevState) => !prevState);
  };
  const router = useRouter();
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !buttonRef.current.contains(e.target)) {
        setBtnClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a className="navbar-brand" href="/">
                {/* <span>BigWing</span> */}
                <img
                  src="images/techg4.png"
                  width={225}
                  alt="techG4"
                  className="img-fluid"
                ></img>
              </a>
              <button
                ref={buttonRef}
                className="navbar-toggler"
                type="button"
                onClick={handleClick}
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/" ? "active" : ""
                        }`}
                        href="/"
                        onClick={() => setActiveItem("Home")}
                      >
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/about" ? "active" : ""
                        }`}
                        href="/about"
                        onClick={() => setActiveItem("About")}
                      >
                        About
                      </a>
                    </li>
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/service" ? "active" : ""
                        }`}
                        href="/service"
                        onClick={() => setActiveItem("Service")}
                      >
                        Services
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActiveItem("Contact")}
                    >
                      <a className={`nav-link ${
                        router.pathname === "/contact" ? "active" : ""
                      }`} href="/contact">
                        Contact
                      </a>
                    </li>
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
      {  /* Right Side bar started */}
      <div className={btnClick ? "left-div show" : "left-div"} ref={menuRef}>
      <ul className="navbar-nav">
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/" ? "active" : ""
                        }`}
                        href="/"
                        onClick={() => setActiveItem("Home")}
                      >
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/about" ? "active" : ""
                        }`}
                        href="/about"
                        onClick={() => setActiveItem("About")}
                      >
                        About
                      </a>
                    </li>
                    <li
                      className="nav-item"
                    >
                      <a
                        className={`nav-link ${
                          router.pathname === "/service" ? "active" : ""
                        }`}
                        href="/service"
                        onClick={() => setActiveItem("Service")}
                      >
                        Services
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActiveItem("Contact")}
                    >
                      <a className={`nav-link ${
                        router.pathname === "/contact" ? "active" : ""
                      }`} href="/contact">
                        Contact
                      </a>
                    </li>
       </ul>
      </div>
    </header>
  );
}
