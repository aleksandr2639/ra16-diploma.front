const Home = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="banner">
          <img
            src="src/assets/banner.jpg"
            className="img-fluid"
            alt="К весне готовы!"
          ></img>
          <h2 className="banner-header">К весне готовы!</h2>
        </div>
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
