import React from "react";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import sidebarBg from "../../assets/bg2.jpg";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

import "./SideBar.scss";

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color="#00bfff" />
          Admin
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<MdDashboard />}
            // suffix={<span className="badge red">New</span>}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}>components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            title="Features"
            icon={<FaGem />}
          >
            <MenuItem>Quản Lý User</MenuItem>
            <MenuItem>Quản Lý Bài Viết</MenuItem>
            <MenuItem>Quản Lý Câu Hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              Hỏi dân IT
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
