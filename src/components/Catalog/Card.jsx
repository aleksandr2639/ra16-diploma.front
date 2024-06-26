import { Link } from "react-router-dom";

const Card = (props) => {
  const { classname, id, title, price, images } = props;

  return (
    <div className={`col-4 ${classname}`}>
      <div className="card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <Link to={`${import.meta.env.VITE_CATALOG}/${id}`} className="btn btn-outline-primary">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
