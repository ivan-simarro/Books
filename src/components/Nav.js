import { useEffect, useState } from "react";
import "./Nav.scss";
import SubItemNav from "./SubItemNav";

export default function Nav({ setPage, setSelected, selected }) {
  function handleClick(e, n) {
    e.nativeEvent.preventDefault();
    setSelected(n);
  }

  useEffect(() => {
    setPage(
      (selected === 3 && "Discover") || (selected === 2 && "Finished") || "Reading");
  }, [selected]);

  return (
    <div className="nav__div">
      <nav className="nav">
        <ul className="nav__ul">
          <SubItemNav selected={selected === 1} text={"Reading List"} handleClick={handleClick} number={1} />
          <SubItemNav selected={selected === 2} text={"Finished Books"} handleClick={handleClick} number={2} />
          <SubItemNav selected={selected === 3} text={"Discover"} handleClick={handleClick} number={3} />
        </ul>
      </nav>
    </div>
  );
}
