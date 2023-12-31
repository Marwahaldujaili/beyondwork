import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Topbar.scss";
import MyContext from "../../context/MyContext";
import BurgerMenu from "../Menu/BurgerMenu";
import iconMobile from "../../images/small_icon_yellow.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { userData, isDarkMode, toggleDarkMode } = useContext(MyContext);

  return (
    <div
      className={`topbarContainer ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="left">
        <span className="logo">
          <Link to="/newsfeed">
            <img src={iconMobile} alt="" />
            <h3>BeyondWork</h3>
          </Link>
        </span>
      </div>
      <div className="center">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="Search for..." />
        </div>
      </div>
      <div className="right">
        <div className="icons">
          <div className="iconItem">
            <NotificationsIcon />
            <span>1</span>
          </div>
          <div className="iconItem" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <DarkModeIcon className="icon" />
            ) : (
              <DarkModeOutlinedIcon className="icon" />
            )}
          </div>

          <Link to={`/user/profile/${userData._id}`}>
            {userData && userData.userImage && (
              <img
                className="user-image-placeholder"
                src={`${process.env.REACT_APP_BACKEND_URL}/user/uploads/${userData.userImage}`}
                alt="userImage"
              />
            )}
          </Link>
        </div>
        <div id="burger-menu-icon" className="iconItem">
          <MenuIcon onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)} />
        </div>
      </div>

      {isBurgerMenuOpen && (
        <BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      )}
    </div>
  );
}
