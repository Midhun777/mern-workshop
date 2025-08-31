import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="w-full outline outline-white flex items-center p-4 justify-between">
        <span className="text-white outline-white font-bold font-mono text-xl mt-3">
          Midhun777
        </span>
        <FontAwesomeIcon icon={faUser} className="text-white outline-white text-xl" />
      </nav>
    </>
  );
}

export default Header;
