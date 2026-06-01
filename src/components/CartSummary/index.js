// Write your code here

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <div>
          <h1>Order Total: Rs {total}/-</h1>
          <p>{cartList.length} Items in cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
