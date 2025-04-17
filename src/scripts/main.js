document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelectorAll(".dropdown")[0]
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("open")
  })
})

document.addEventListener("click", (event) => {
  const dropdown = event.target.closest(".dropdown")
  if (!dropdown) {
    document.querySelectorAll(".dropdown.open")
      .forEach(dropdown => dropdown.classList.remove("open"))
  }
})
