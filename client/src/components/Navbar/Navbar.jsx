import avatar from "../../assets/icons/avatar.png";
import searchIcon from "../../assets/icons/search-icon.svg";
import helpIcon from "../../assets/icons/help-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import altSettingsIcon from "../../assets/icons/settings-alt-icon.svg";
import notificationIcon from "../../assets/icons/notification-icon.svg";
import logo from "../../assets/logos/logo.svg";
import sidebar from "../../assets/icons/sidebar.svg";
const Navbar = () => {
  return (
    <>
      <div className="hidden md:flex place-content-between mt-5 mx-5">
        <div className="flex bg-white items-center rounded-lg flex-1">
          <div>
            <img className="p-3" src={searchIcon}></img>
          </div>
          <div>
            <input
              className="outline-none  "
              type="text"
              placeholder="Search your course"
            ></input>
          </div>
        </div>

        <div className="flex items-center mx-7">
          <div className="mx-5">
            <img src={helpIcon}></img>
          </div>
          <div className="mx-5">
            <img src={messageIcon}></img>
          </div>
          <div className="mx-5">
            <img src={altSettingsIcon}></img>
          </div>
          <div className="mx-5">
            <img src={notificationIcon}></img>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <img className="w-10 bg-orange-300 rounded-md" src={avatar}></img>
          </div>
          <p className="font-bold text-slate-900 ml-5">Adeline H. Dancy</p>
        </div>
      </div>
      <div className="flex md:hidden bg-white px-5 py-1 items-center place-content-between">
        <div>
          <img className="w-8" src={sidebar} />
        </div>
        <div>
          <img className="h-12" src={logo} />
        </div>
        <div>
          <img className="w-10 bg-orange-300 rounded-md" src={avatar}></img>
        </div>
      </div>
    </>
  );
};
export default Navbar;
