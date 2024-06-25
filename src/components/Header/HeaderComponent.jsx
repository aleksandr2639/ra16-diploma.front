import { Link } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import HeaderForm from "./HeaderForm";

const HeaderComponent = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src="src/assets/header-logo.png" alt="Bosa Noga"></img>
            </Link>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={import.meta.env.VITE_MAIN}>
                    Главная
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={import.meta.env.VITE_CATALOG}>
                    Каталог
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={import.meta.env.VITE_ABOUT}>
                    О магазине
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={import.meta.env.VITE_CONTACTS}>
                    Контакты
                  </Link>
                </li>
              </ul>
              <div>
                <HeaderForm />
                <HeaderIcons />
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

export default HeaderComponent;
