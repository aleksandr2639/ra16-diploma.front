import { useDispatch } from "react-redux";

const Error = ({ error, text, clossest, callback }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (error && e.currentTarget.closest(clossest)) {
      dispatch(callback());
    }
  };
  return (
    <div className="error">
      <div className="error__wrap">
        <div className="error__mes">{`${text}: ${error.message}`}</div>
        <button onClick={handleClick} className="error__btn">
          Повторить запрос
        </button>
      </div>
    </div>
  );
};

export default Error;
