import { SidebarOption } from "./components/Option";
import "./Sidebar.css";

export const Sidebar = () => {
  const options = ["Dashboard", "Tables"];
  return (
    <div className="sidebar">
      <div className="logo-container">
      <img
        className="sidebar-logo"
        src="https://algogenes.com/wp-content/uploads/2021/01/logo-social-sq.png"
        alt=""
      />
      <h1 className="company-name">Empresa</h1>
      </div>
      {options.map((option) => (
        <SidebarOption title={option} icon="https://cdn.pixabay.com/photo/2021/09/28/13/14/cat-6664412_960_720.jpg" />
      ))}
    </div>
  );
};
