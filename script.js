window.addEventListener("load", function () {
  const form = document.querySelector(".form");
  const input = document.querySelector(".input");
  const toDoList = document.querySelector(".todo-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const p = document.createElement("p");
    toDoList.append(p);
    p.append(input.value);
    input.value = "";
    const lists = document.querySelectorAll("p");
    lists.forEach((element) => {
      element.addEventListener("click", () => {
        element.style.display = "none";
      });
    });
  });
});
