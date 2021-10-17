import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from "@fortawesome/free-solid-svg-icons";
import './Searchbar.css';

function Searchbar() {
  return (
    <div class="search-container">
        <form action="#">
        <input class="searchtext" type="text" placeholder="Search.." name="search"  />
        <button class="searchbtn"><FontAwesomeIcon icon={faSearch} style={{height: "14px", width: "14px"}}/></button>
        </form>
     </div>
  );
}

export default Searchbar;








