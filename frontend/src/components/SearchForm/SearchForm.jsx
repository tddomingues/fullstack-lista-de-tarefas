import { useState } from "react";

//router
import { useNavigate } from "react-router-dom";

//styles
import { SearchFormStyles } from "./styles";
import { LuSearch } from "react-icons/lu";
import { MdOutlineClear } from "react-icons/md";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/search?q=${search}`);
  };

  return (
    <SearchFormStyles onSubmit={handleSearch}>
      <label>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Busque uma tarefa"
            onChange={({ target }) => setSearch(target.value)}
            value={search || ""}
          />
          <LuSearch className="svg-search" />
          {search.length > 0 && (
            <MdOutlineClear
              className="svg-clear"
              onClick={() => {
                navigate("/");
              }}
            />
          )}
        </div>
      </label>
    </SearchFormStyles>
  );
};

export default SearchForm;
