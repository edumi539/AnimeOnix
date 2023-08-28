import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { TextSearchSubmit } from "../../actions/ListAnimesOfSeasonAction";
import "./header.css";
const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(TextSearchSubmit(text));
  }, [text]);

  function handleChange(e) {
    onChangeText(e.target.value);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg" navbar-light bg-light>
        <a className="navbar-brand" href="/">
          Anime Onix
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a class="nav-link home" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <div>
            <input
              value={text}
              onChange={(e) => handleChange(e)}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
            />
          </div>
        </form>
      </nav>
    </div>
  );
};

export default HeaderBar;
