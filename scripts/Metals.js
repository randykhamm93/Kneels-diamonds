import { setMetals } from "./TransientState.js"

const handleMetalChoice = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        setMetals(parseInt(changeEvent.target.value))
    }
}

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals")
  const metals = await response.json()

  document.addEventListener("change", handleMetalChoice)

  let metalsHTML = ""
  const divStringArray = metals.map(
    (metal) => {
    return `<div>
      <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
    </div>`
    }
  )

  metalsHTML += divStringArray.join("")

  return metalsHTML
}
