import { useSelector, useDispatch } from "react-redux";
import Preloader from "../Preloader";
import {
  selectCart,
  removeProductFromCart,
  resetOrder,
} from "../../redux/CartSlice";
import { v4 as uuidv4 } from "uuid";
import CartForm from "./CartForm";

const CartComponent = () => {
  const dispatch = useDispatch();
  const { cartItems, cartLoading, cartError, orderState } =
    useSelector(selectCart);
  const total = cartItems.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  const onRemoveBtnClick = (index) => {
    dispatch(removeProductFromCart(index));
  };

  const showSuccess = () => {
    setTimeout(() => {
      dispatch(resetOrder());
    }, 3000);
    return (
      <div style={{ textAlign: "center", margin: "2em 0 2em 0" }}>
        Заказ успешно оформлен
      </div>
    );
  };

  return (
    <>
      {cartLoading ? (
        <Preloader />
      ) : (
        <>
          {orderState && showSuccess()}
          {cartItems.length !== 0 && !orderState && (
            <>
              <section className="cart">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Название</th>
                      <th scope="col">Размер</th>
                      <th scope="col">Кол-во</th>
                      <th scope="col">Стоимость</th>
                      <th scope="col">Итого</th>
                      <th scope="col">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((el, index) => (
                      <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{el.title}</td>
                        <td>{el.size}</td>
                        <td>{el.quantity}</td>
                        <td>{el.price} руб.</td>
                        <td>{(el.price * el.quantity).toLocaleString()}руб.</td>
                        <td>
                          <button
                            onClick={() => onRemoveBtnClick(index)}
                            className="btn btn-outline-danger btn-sm"
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={5} className="text-right">
                        Общая стоимость
                      </td>
                      <td>{total} руб.</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              {cartError && (
                <div className="error">
                  <div className="error__wrap">
                    <div className="error__mes">
                      Ошибка запроса оформления заказа, повторите отправку
                      данных
                    </div>
                  </div>
                </div>
              )}
              <CartForm />
            </>
          )}
          {!cartItems.length && !orderState && (
            <div style={{ textAlign: "center", margin: "2em 0 2em 0" }}>
              В корзине нет товаров
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartComponent;
