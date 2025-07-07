import "./Admin.scss";
import { FaHeart, FaBars } from "react-icons/fa";
import { useState } from "react";
import SideBar from "./SiderBar";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        Content
      </div>
    </div>
  );
};

export default Admin;
