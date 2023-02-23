// const task = document.getElementById('create-task-form')
// const submitbtn = document.getElementById('submitbtn')
const main = document.getElementById("main-content")
const input = document.getElementById('new-task-description')
const submitbtn = document.getElementById('submitbtn')
const list = document.getElementById('list')


main.addEventListener("submit", (e) => {
  // your code here
e.preventDefault()
const main1 = document.createElement('li')
list.append(main1)
main1.innerText = input.value

});
