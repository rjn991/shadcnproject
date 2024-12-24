import avatar from "../../assets/icons/avatar.png";
import searchIcon from "../../assets/icons/search-icon.svg";
import helpIcon from "../../assets/icons/help-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import altSettingsIcon from "../../assets/icons/settings-alt-icon.svg";
import notificationIcon from "../../assets/icons/notification-icon.svg";
import logo from "../../assets/logos/logo.svg";
import sidebar from "../../assets/icons/sidebar.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";


import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import studentsIcon from "../../assets/icons/students-icon.svg";
import chapterIcon from "../../assets/icons/chapter-icon.svg";
import reportsIcon from "../../assets/icons/reports-icon.svg";
import settingsIcon from "../../assets/icons/settings-icon.svg";

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
          <Drawer>
            <DrawerTrigger>
              <img className="w-8 inline-block " src={sidebar} />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <DrawerDescription></DrawerDescription>
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
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
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
