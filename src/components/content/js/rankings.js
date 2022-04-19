import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/rankings.scss";
const Rankings = () => {
   return (
    <div className="rankings">
        
      <div className="title">
        <p>RANKINGS</p>
      </div>
      <div className="rankings-rank">
        <div className="number">8,6</div>
        <div className="ratings">
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>
      </div>   
    </div>
  );
};

export default Rankings;
