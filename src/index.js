

const newTaskDescription = document.getElementById("new-task-description");

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(newTaskDescription.value)
    form.reset()
  })
});

function buildToDo (todo) {
  let p = document.createElement('ul')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo} `
  btn.textContent = `x`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
  }


 function handleDelete(e) {
  e.target.parentNode.remove()
 } 