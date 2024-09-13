import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/store";

export default function SearchBox() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.filters.name);

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.searchContainer}>
      <label htmlFor="searchId" className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        value={query}
        id="searchId"
        onChange={handleChange}
      />
    </div>
  );
}
