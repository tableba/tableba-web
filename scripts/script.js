document.addEventListener("DOMContentLoaded", () => {
  const main_title = document.getElementById("main_title");
  const sub_title = document.getElementById("sub_title");
  sub_title.addEventListener("mouseover", () => {
    main_title.classList.add("active");
  })
  sub_title.addEventListener("mouseout", () => {
    main_title.classList.remove("active");
  })
})
