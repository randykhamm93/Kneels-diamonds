import { setStyles } from "./TransientState.js"

const handleStyleChoice = (changeEvent) => {
  if (changeEvent.target.name === "style") {
    setStyles(parseInt(changeEvent.target.value))
  }
} 


export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles")
  const styles = await response.json()

  document.addEventListener("change", handleStyleChoice)

  let stylesHTML = ""
  const divStringArray = styles.map((style) => {
    return `<div>
      <input type='radio' name='style' value='${style.id}' /> ${style.style}
    </div>`
    }
  )

  stylesHTML += divStringArray.join("")

  return stylesHTML
}
