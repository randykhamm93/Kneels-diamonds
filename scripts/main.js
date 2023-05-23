import { OrdersList } from './CustomOrdersList.js'
import { MetalOptions } from './Metals.js'
import { PlaceOrder } from './Orders.js'
import { SizeOptions } from './Sizes.js'
import { StyleOptions } from './Styles.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const placeOrderHTML = await PlaceOrder()
    const orderListHTML = await OrdersList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals_options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes_options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles_options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
          ${placeOrderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}
document.addEventListener("newOrderPlaced", customEvent => {
  console.log("State of data has changed. Regenerating HTML...")
  render()
})

render()
