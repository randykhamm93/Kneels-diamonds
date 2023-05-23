export const OrdersList = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
  const orders = await fetchResponse.json()
  
   // Add this line to check the value of orders
  let ordersHTML = orders.map(
      (order) => {
        const orderPrice = order.metal.price + order.style.price + order.size.price
        return `<section class="order">
                <div>Order #${order.id} cost $${orderPrice}</div>
                </section>`
      }
  )

  return ordersHTML.join("")
}
