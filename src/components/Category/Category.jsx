import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectCatalog, fetchCatalog } from "../../redux/CatalogSlice.jsx";
import { selectCategories, setSelected } from "../../redux/CategorySlice.jsx";

const Category = ({ category }) => {
  const { selected } = useSelector(selectCategories);
  const { search } = useSelector(selectCatalog);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (selected.id === category.id) {
      return;
    }
    dispatch(setSelected(category.id));
    dispatch(
      fetchCatalog({
        categoryId: category.id,
        q: search,
      })
    );
  };

  return (
    <li className="nav-item">
      <Link
        onClick={handleClick}
        className={selected.id === category.id ? "nav-link active" : "nav-link"}
        to="#"
      >
        {category.title}
      </Link>
    </li>
  );
};

export default Category;
