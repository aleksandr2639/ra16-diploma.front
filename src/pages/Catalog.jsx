const Catalog = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="banner">
          <img
            src="src/assets/banner.jpg"
            class="img-fluid"
            alt="К весне готовы!"
          ></img>
          <h2 className="banner-header">К весне готовы!</h2>
        </div>
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск"></input>
          </form>
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Все
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Женская обувь
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Мужская обувь
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Обувь унисекс
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Детская обувь
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Catalog;
