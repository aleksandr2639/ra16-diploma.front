import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const setActiveClass = ({ isActive }) =>
  isActive ? "nav-item active" : "nav-item";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src="src/assets/header-logo.png" alt="Bosa Noga"></img>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <NavLink className={setActiveClass} to="/">
                  Главная
                </NavLink>
                <NavLink className={setActiveClass} to="/catalog">
                  Каталог
                </NavLink>
                <NavLink className={setActiveClass} to="/about">
                  О магазине
                </NavLink>
                <NavLink className={setActiveClass} to="/contacts">
                  Контакты
                </NavLink>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                >
                  <input className="form-control" placeholder="Поиск"></input>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
