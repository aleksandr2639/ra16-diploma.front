import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="col">
      <section>
        <h5>Информация</h5>
        <nav className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={import.meta.env.VITE_ABOUT}>
              О магазине
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={import.meta.env.VITE_CATALOG}>
              Каталог
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={import.meta.env.VITE_CONTACTS}>
              Контакты
            </Link>
          </li>
        </nav>
      </section>
    </div>
  );
};
export default Information;
