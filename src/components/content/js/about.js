import "../styles/about.scss";
import { connect } from "react-redux";

import { TabPanel } from 'react-tabs';

function about(props) {
  return (
    
  
    <div className="about-page">
      <div className="contact-info">
        <div className="title">CONTACT INFORMATION</div>
        <table className="details">
          <tbody>
          <tr>
            <td className="label">Phone:</td>
            <td className="value">{props.phone}</td>
          </tr>
          <tr>
            <td className="label">Address:</td>
            <td className="value" style={{ color: "rgb(102, 102, 102)" }}>
              <p>{props.address}</p>
              <p>{props.l2}</p>
            </td>
          </tr>
          <tr>
            <td className="label">Email:</td>
            <td className="value">{props.email}</td>
          </tr>
          <tr>
            <td className="label">Site:</td>
            <td className="value">{props.site}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="basic-info">
        <div className="title">BASIC INFORMATION</div>
        <table className="details">
          <tbody>
          <tr>
            <td className="label">Birthday:</td>
            <td className="value1">{props.birthday}</td>
          </tr>
          <tr>
            <td className="label">Gender:</td>
            <td className="value1">{props.gender}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    
  );
}

const mapStateToProps = (state) => {
  return {
    phone: state.phone,
    address: state.address,
    l2: state.l2,
    email: state.email,
    site: state.site,
    birthday: state.birthday,
    gender: state.gender,
  };
};

export default connect(mapStateToProps)(about);
