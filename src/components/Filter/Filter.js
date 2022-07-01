import { useDispatch, useSelector } from "react-redux";
import { setFilterOption } from "../../actions/filter";
import { deleteTodoCompleted } from "../../actions/todo";
import { filterSelector } from "../../selectors";
import "./Filter.css";

function Filter() {
  const filterOptions = [
    {
      type: "all",
      name: "All",
    },
    {
      type: "completed",
      name: "Completed",
    },
    {
      type: "todo",
      name: "Todo",
    },
  ];
  const filterOption = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilterOption(e.target.id));
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteTodoCompleted());
  };
  return (
    <div className="filter">
      <ul className="filter-list">
        {filterOptions.map((option, index) => {
          return (
            <li key={index} className="filter-item">
              <input
                id={option.type}
                className="filter-item__radio"
                type="radio"
                onChange={handleFilter}
                checked={option.type === filterOption}
              />
              <label className="filter-item__label" htmlFor={option.type}>
                {option.name}
              </label>
            </li>
          );
        })}
      </ul>
      <button className="clear-btn" onClick={handleDeleteCompleted}>
        Clear completed
      </button>
    </div>
  );
}

export default Filter;
