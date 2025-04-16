import React, { useState } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  RiSettingsFill,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { logout } from "../../helper/SessionHelper";
import { menuItems } from "../../data/data";

const SidebarMenu = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  const location = useLocation();
  const path = location.pathname;


  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div className="py-0">
      <Menu
        style={{ background: "#F6F6F6" }}
        mode="inline"
        selectedKeys={[path]}
        onSelect={({ key }) => setActiveKey(key)}
      >

        {menuItems?.map((item) => (
            <Menu.Item
              key={item.path}
              icon={<item.icon size={25} />}
              className={
                item.path === path ? "!bg-red-500 !text-white" : ""
              } 
            >
              <Link to={item.path} className={`${item.path === path ? "text-white" : "text-black"} text-[18px]`}>
                {item.title}
              </Link>
            </Menu.Item>
          ))}

        {/* Sub Menu Part */}
        <Menu.SubMenu
          className={activeKey === "settings" ? "!bg-red-500 !text-white" : ""}
          key="settings"
          icon={<RiSettingsFill size={25} />}
          title={
            <button
              className="flex items-center justify-between w-full"
            >
              <span className="text-[18px]">Settings</span>
            </button>
          }
          onTitleClick={toggleSettings}
          popupClassName="bg-white"
        >
          <Menu.Item
            key="terms"
            className={activeKey === "terms" ? "!bg-red-500 !text-white" : ""} // Tailwind active style
          >
            <Link to="/terms-conditions" className="text-[18px]">
              Terms & Conditions
            </Link>
          </Menu.Item>
          <Menu.Item
            key="about"
            className={activeKey === "about" ? "!bg-red-500 !text-white" : ""} // Tailwind active style
          >
            <Link to="/about" className="text-[18px]">
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item
            key="faqs"
            className={activeKey === "faqs" ? "!bg-red-500 !text-white" : ""} // Tailwind active style
          >
            <Link to="/faqs" className="text-[18px]">
              FAQs
            </Link>
          </Menu.Item>
          <Menu.Item
            key="privacy"
            className={activeKey === "privacy" ? "!bg-red-500 !text-white" : ""} // Tailwind active style
          >
            <Link to="/privacy-policy" className="text-[18px]">
              Privacy Policy
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item
          key="signout"
          icon={<RiLogoutBoxRLine size={25} />}
          className={activeKey === "signout" ? "bg-red-500 text-white" : ""} // Tailwind active style
        >
          <button onClick={() => logout()} className="text-[18px]">
            Sign Out
          </button>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SidebarMenu;
