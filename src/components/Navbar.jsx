import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsersSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUsersSlash} />
          {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
              <span>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <span>로그인</span>
            </div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <h1>
          <img
            width={100}
            src="data:image/png;base64,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"
            alt=""
            onClick={goToHome}
          />
        </h1>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            onKeyPress={(e) => search(e)}
            placeholder="제품검색"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
