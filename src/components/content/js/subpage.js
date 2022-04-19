import "../styles/subpage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { Tab, TabPanel, Tabs,TabList } from "react-tabs";
import About from "./about";

const SubPage = () => {
  return (
      <TabList>
          
    <Tabs>
      <div className="sub-page">
        <Tab>
            
          <div className="timeline">
            <FontAwesomeIcon icon={faEye} className="timeline-icon" />
            <span className="timeline-title">Timeline</span>
          </div>
        
        </Tab>
        <Tab>
          <div className="about">
            <FontAwesomeIcon icon={faUser} className="about-icon" />
            <span className="about-title">About</span>
          </div>
        </Tab>
      </div>

      <TabPanel> </TabPanel>
      <TabPanel>
        <About />
      </TabPanel>
    </Tabs>
    
    </TabList>
    
  );
};

export default SubPage;
