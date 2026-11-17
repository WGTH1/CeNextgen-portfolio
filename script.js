let data = []
const list = document.querySelector("#list");
const input = document.querySelector("#item");
const input2 = document.querySelector("#item2");
const addBtn = document.querySelector("#add");

function saveData() {
     const nameValue = input.value
     const ageValue = input2.value

     const newData = {
          name: nameValue,
          age: ageValue
     }
     data.push(newData);
}

addBtn.addEventListener("click", () => {
     const text = input.value;
     const text2 = input2.value
     if (text === "" && text2 === "" && typeof(text2) ==! 'number') {
          return;
     } else {
          const li = document.createElement("li");
          const delBtn = document.createElement("button")

          delBtn.textContent = "Delete"
          delBtn.style.background = "red"
          delBtn.style.padding = "20px"
          delBtn.style.margin = "20px"
          delBtn.style.borderRadius = "20px"

          delBtn.addEventListener("click", () => {
               li.remove();
          })
          li.textContent = `Name : ${text} Age : ${text2}`
          list.append(li)
          li.append(delBtn)
          saveData()

     }
     input.value = "";
     input2.value = "";
})
console.log(data);

const furits = ["Aplee", "Banana"]
const list2 = document.querySelector("#list2")

for (furit of furits) {
     const list = document.createElement("li")
     list.append(furit)
     list2.append(list);
}