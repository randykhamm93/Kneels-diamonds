import { setSizes } from "./TransientState.js"

const handleSizeChoice = (changeEvent) => {
  if (changeEvent.target.name === "size") {
    setSizes(parseInt(changeEvent.target.value))
  }
}

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes")
  const sizes = await response.json()

  document.addEventListener("change", handleSizeChoice)
  let sizesHTML = ""
  const divStringArray = sizes.map(
    (size) => {
      return `<div>
      <input type='radio' name='size' value='${size.id}' /> ${size.carets}
      </div>`
    }
  )
    sizesHTML += divStringArray.join("")


  return sizesHTML
}
