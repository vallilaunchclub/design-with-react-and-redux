import '../styles/menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Menu(){
    return (
        <div className='menus'>
            <div className='menu'>Find People</div>
            <div className='menu'>Messages <span className='message-notifications'>4</span></div>
            <div className='menu'>My Contacts</div>
            <FontAwesomeIcon icon={ faCircleUser } className="user-icon" />
            
            <div className='user active'></div>
        </div>
    );
}

export default Menu;