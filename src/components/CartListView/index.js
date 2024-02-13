import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, orderPlaced, placed} = value
      let confirm = false
      let cartValue = 0
      cartList.forEach(each => {
        cartValue += each.price * each.quantity
      })
      const onSelectingCash = () => {
        confirm = true
      }
      const onConfirmOrder = () => {
        orderPlaced()
      }

      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <Popup
            trigger={<button className="check">Checkout</button>}
            position="center"
          >
            {close => (
              <div className="popup">
                <button type="button" className="close-button" onClick={close}>
                  x
                </button>
                <p>Choose the Payment Method</p>
                <div className="methods">
                  <button type="button" className="method-button" disabled>
                    Card
                  </button>
                  <button type="button" className="method-button" disabled>
                    Net Banking
                  </button>
                  <button type="button" className="method-button" disabled>
                    UPI
                  </button>
                  <button type="button" className="method-button" disabled>
                    Wallet
                  </button>
                  <button
                    type="button"
                    className="method-button"
                    onClick={onSelectingCash}
                  >
                    Cash on Delivery
                  </button>
                </div>
                <div className="cart-summary">
                  <p>Number of Items:{cartList.length}</p>
                  <p>Total Price:{cartValue}</p>
                </div>
                <Popup
                  trigger={<button className="check">Confirm Order</button>}
                  position="center"
                >
                  {close2 => (
                    <div className="pop">
                      <button
                        type="button"
                        className="close-button"
                        onClick={close2}
                      >
                        x
                      </button>
                      <p>Your order has been placed successfully</p>
                    </div>
                  )}
                </Popup>
              </div>
            )}
          </Popup>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
// <button
//             type="button"
//             className="checkout-button"
//             onClick={renderCheckout}
//           >
//             Checkout
//           </button>
