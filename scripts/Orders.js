import { placeOrder } from "./TransientState.js"

const handlePlaceOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "placeOrder") {
    placeOrder()
  }
}

export const PlaceOrder = () => {
  document.addEventListener("click", handlePlaceOrderClick)

  return "<div id='button'><button id='placeOrder'>Place Order</button></div>"
}
