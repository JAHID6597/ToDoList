let itemValue = document.getElementById("add-item-input");
let addItem = document.getElementById("add-item-btn");
let ul = document.getElementById("list-items");
let deleteBtn = document.getElementsByClassName("del");
let filter = document.getElementById("filter");
let listItem = document.getElementsByClassName("list-group-item");

addItem.addEventListener("click", () => {
  let li = document.createElement("li");
  li.className = "list-group-item";

  let textSpan = document.createElement("span");
  let textSpanValue = document.createTextNode(itemValue.value);
  if (textSpanValue.length === 0) {
    alert("Enter valid item...");
    return;
  }
  textSpan.appendChild(textSpanValue);
  li.appendChild(textSpan);

  let delSpan = document.createElement("span");
  delSpan.className = "del";
  let spanValue = document.createTextNode("X");
  delSpan.appendChild(spanValue);

  li.appendChild(delSpan);

  ul.appendChild(li);
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    if (confirm("Are you sure you want to Delete this item")) {
      let li = e.target.parentNode;
      ul.removeChild(li);
    }
  }
});

filter.addEventListener("keyup", () => {
  let searchItem = filter.value.toLowerCase();

  let items = document.getElementsByTagName("li");

  let itemArr = Array.from(items);
  itemArr.forEach((item) => {
    let listValue = item.childNodes[0].textContent.toLowerCase();

    if (listValue.includes(searchItem)) item.style.display = "block";
    else item.style.display = "none";

    if (searchItem.length === 0) item.style.display = "block";
  });
});
