import logo from "../../assets/logos/logo.svg";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import studentsIcon from "../../assets/icons/students-icon.svg";
import chapterIcon from "../../assets/icons/chapter-icon.svg";
import helpIcon from "../../assets/icons/help-icon.svg";
import reportsIcon from "../../assets/icons/reports-icon.svg";
import settingsIcon from "../../assets/icons/settings-icon.svg";
const Sidebar = () => {
  return (
    <div className="w-60 text-gray-500 min-h-screen ">
      <img className="w-24 mx-3 pt-6 m-l mb-6" src={logo} alt="logo"></img>
      
      <div className=" font-bold">
        <div className="flex mx-3 my-2 px-2 py-3 rounded-md cursor-default hover:bg-zinc-100">
          <img src={dashboardIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Dashboard</p>
        </div>
        <div className="flex mx-3 my-2 px-2 py-3 cursor-default text-black bg-zinc-100 rounded-md">
          <img src={studentsIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Students</p>
        </div>
        <div className="flex mx-3 my-2 px-2 py-3 rounded-md cursor-default hover:bg-zinc-100">
          <img src={chapterIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Chapter</p>
        </div>
        <div className="flex mx-3 my-2 px-2 py-3 rounded-md cursor-default hover:bg-zinc-100">
          <img src={helpIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Help</p>
        </div>
        <div className="flex mx-3 my-2 px-2 py-3 rounded-md cursor-default hover:bg-zinc-100">
          <img src={reportsIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Reports</p>
        </div>
        <div className="flex mx-3 my-2 px-2 py-3 rounded-md cursor-default hover:bg-zinc-100">
          <img src={settingsIcon} alt="sidebar-icon"></img>
          <p className="ml-2">Settings</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
