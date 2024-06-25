import { useSelector } from "react-redux";
import { selectCart } from "../../redux/CartSlice";
import { fetchOrder } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

export const CartForm = () => {
  const { cartItems } = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    const phone = data.phone;
    const address = data.address;
    const items = cartItems.map((el) => ({
      id: el.id,
      price: el.price,
      count: el.quantity,
    }));
    const body = {
      owner: {
        phone,
        address,
      },
      items,
    };
    dispatch(fetchOrder(body));
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              name="phone"
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              name="address"
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
            />
          </div>
          <div className="form-group form-check">
            <input
              name="agreement"
              type="checkbox"
              className="form-check-input"
              id="agreement"
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
};

export default CartForm;
