import '../styles/search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search(){
    return (
        <div className="search">
          <input type="text" className='search-input' placeholder='Search' />
          <FontAwesomeIcon icon={ faMagnifyingGlass } className="search-icon" />
        </div>
    );
}

export default Search;