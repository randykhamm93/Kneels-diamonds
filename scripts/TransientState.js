// Set up the transient state data structure and provide initial valuess
const transientState = {
  "metalId": 0,
  "sizeId": 0,
  "styleId": 0
}


// Functions to modify each property of transient state
export const setMetals = (chosenMetal) => {
  transientState.metalId = chosenMetal
  console.log(transientState)
}

export const setSizes = (chosenSize) => {
  transientState.sizeId = chosenSize
  console.log(transientState)
}

export const setStyles = (chosenStyle) => {
  transientState.styleId = chosenStyle
  console.log(transientState)
}

// Function to convert transient state to permanent state
export const placeOrder = async () => {
  /*
      Add the required keys to the object below that are
      needed for a POST operation.
  */
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
  }

  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions)

  const customEvent = new CustomEvent("newOrderPlaced")
  document.dispatchEvent(customEvent)
}
