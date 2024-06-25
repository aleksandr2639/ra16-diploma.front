import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  setTheSize,
  resetSize,
  selectProduct,
} from "../../redux/ProductSlice";
import { addProductToCart } from "../../redux/CartSlice";
import Banner from "../Banner";

const AboutProductsView = (props) => {
  const {
    title,
    images,
    sku,
    manufacturer,
    color,
    material,
    reason,
    season,
    price,
  } = props;

  const { item, quantity, selectedSize } = useSelector(selectProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCartBtnClick = () => {
    const product = {
      id: id,
      title: title,
      price: price,
      quantity,
      size: selectedSize,
      total: price * quantity,
    };
    dispatch(addProductToCart(product));
    navigate(import.meta.env.VITE_CART);
  };

  const onSelectSizeClick = (size) => {
    if (size === selectedSize) {
      dispatch(resetSize());
    } else {
      dispatch(setTheSize(size));
    }
  };

  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={images[0]} className="img-fluid" alt=""></img>
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              {item.sizes
                .filter((size) => size.available)
                .map((item) => (
                  <span
                    className={
                      "catalog-item-size" +
                      (selectedSize === item.size ? " selected" : "")
                    }
                    key={item.size}
                    onClick={() => onSelectSizeClick(item.size)}
                  >
                    {item.size}
                  </span>
                ))}
            </p>
            {item.sizes.filter((size) => size.available).length !== 0 && (
              <p>
                Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button
                    onClick={() => dispatch(decrement())}
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                  <span className="btn btn-outline-primary">{quantity}</span>
                  <button
                    onClick={() => dispatch(increment())}
                    className="btn btn-secondary"
                  >
                    +
                  </button>
                </span>
              </p>
            )}
          </div>
          {item.sizes.filter((size) => size.available).length !== 0 &&
            selectedSize && (
              <button
                onClick={onCartBtnClick}
                className="btn btn-danger btn-block btn-lg"
              >
                В корзину
              </button>
            )}
        </div>
      </div>
    </section>
  );
};

export default AboutProductsView;
