document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement("li");
  
  const title = document.createElement("h2");
  title.textContent = `${event.target.title.value}`;
  newListItem.appendChild(title)
 
  const author = document.createElement("h3");
  author.textContent = `${event.target.author.value}`;
  newListItem.appendChild(author)
  
  const category = document.createElement("p");
  category.textContent = `${event.target.category.value}`;
  newListItem.appendChild(category)

  const list = document.querySelector("#reading-list");
  list.appendChild(newListItem);

this.reset()
}