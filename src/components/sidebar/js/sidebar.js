import "../styles/sidebar.scss";
import Image from "./image";
import Work from "./work";
import Skills from "./skills";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Image/>
      <Work/>
      <Skills/>
    </div>
  );
};

export default Sidebar;
