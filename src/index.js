// const task = document.getElementById('create-task-form')
// const submitbtn = document.getElementById('submitbtn')
const main = document.getElementById("main-content")
const input = document.getElementById('new-task-description')
const submitbtn = document.getElementById('submitbtn')
const list = document.getElementById('list')
// const deletebtn = document.getElementById('deletebtn')


main.addEventListener("submit", (e) => {
  // your code here
e.preventDefault()
const main1 = document.createElement('li')
list.append(main1)
main1.innerText = input.value
const deletebtn1 = document.createElement('button')
main1.append(deletebtn1)
deletebtn1.innerText = "x"
deletebtn1.addEventListener("click", (e)=>{
  e.preventDefault()
  main1.remove(deletebtn1)

})
});

