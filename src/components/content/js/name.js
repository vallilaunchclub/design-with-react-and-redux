import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/name.scss";
import { connect } from "react-redux";

const name = (props) => {
  return (
    <div className="person-details">
      <div className="name">
        <h1>{props.name}</h1>
        <p>{props.role}</p>
      </div>
      <div className="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
        <span className="location-city">
          <span className="city-name">{props.location}</span>,{" "}
          <span className="city-code">NY</span>{" "}
        </span>
      </div>
      <div className="book">
        <FontAwesomeIcon icon={faBookmark} className="bookmark" />{" "}
        <span className="book-text"> Bookmark </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    role: state.role,
    location: state.location,
  };
};

export default connect(mapStateToProps)(name);
