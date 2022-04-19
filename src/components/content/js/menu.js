import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/menu.scss";

const Menu = () => {
    return (
        <div className="content-menu">
            <div className="messages">
                <FontAwesomeIcon icon={faMessage} className="messages-icon" />
                <span className="messages-title">Send message</span>
            </div>
            <div className="contacts">
                <FontAwesomeIcon icon={faCheck} className="contacts-icon" />
                <span className="contacts-title">Contacts</span>
            </div>
            <div className="report-user">Report User</div>
        </div>
    );
}

export default Menu;