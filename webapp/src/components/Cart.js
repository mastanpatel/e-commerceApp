import './Cart.css';
import { faCartPlus  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Cart() {
  return (
    <div>
        <button class="cartbtn"><FontAwesomeIcon icon={faCartPlus} class="cart"/></button>
    </div>
  );
}

export default Cart;