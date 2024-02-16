let arrayOfElements = [
    {
        id: 1,
        isChecked: false,
        SKU_CODE: 400404,
        SKU_NAME: "Anc Fresh Dairy White Milk 3L BOT",
    },
    {
        id: 2,
        isChecked: false,
        SKU_CODE: 410444,
        SKU_NAME: "Anc Fresh Dairy White Milk 2L BOT",
    },
    {
        id: 3,
        isChecked: false,
        SKU_CODE: 420504,
        SKU_NAME: "Anc Fresh Dairy Curd 1L",
    },
    {
        id: 4,
        isChecked: false,
        SKU_CODE: 430455,
        SKU_NAME: "Anc Fresh Dairy Butter KG",
    },
    {
        id: 5,
        isChecked: false,
        SKU_CODE: 442484,
        SKU_NAME: "Anc Fresh Dairy White CREAM MILK",
    }

]
let newArray = []
let array = ["EA", "OU", "CT"]

function chnageIsChecked(checkboxId){
    
    let index = arrayOfElements.findIndex(function(event){
        
        let productId = 'checkbox'+event.id;
        if (productId === checkboxId){
            return true;
        }
        else{
            return false;
        }
    });
    newArray.push(index);
    
}

let allProducts = document.getElementById("allProducts");
for (let item of arrayOfElements){
    let checkboxId = 'checkbox'+item.id;
    let divElement = document.createElement("div");
    divElement.classList.add("items-container");
    allProducts.appendChild(divElement);
    let checkBoxEle = document.createElement("input");
    checkBoxEle.classList.add("products-list-11");
    checkBoxEle.checked = item.isChecked
    checkBoxEle.id = checkboxId;
    checkBoxEle.type = "checkbox";
    checkBoxEle.addEventListener("change", function(){
        chnageIsChecked(checkboxId);
    });
    divElement.appendChild(checkBoxEle);
    let codeEle = document.createElement("p");
    codeEle.classList.add("products-list-12");
    codeEle.textContent = item.SKU_CODE;
    divElement.appendChild(codeEle);
    let codeName = document.createElement("p");
    codeName.classList.add("products-list-13");
    codeName.textContent = item.SKU_NAME;
    divElement.appendChild(codeName);
}
let subArray = [1, 2, 3, 4, 5, 6, 7];

let addSelectedButton = document.getElementById("addSelectedButton");
let detailsOfProduct = document.getElementById("detailsOfProduct");
let quantityValue = '';
addSelectedButton.onclick = function(){
    console.log(newArray);
    popupPage.classList.remove("popup-container-1");
    popupPage.classList.add("popup-container");
    displayPage.classList.remove("front-page-container-2");
    displayPage.classList.add("front-page-container-1");
    for (let newItem of newArray){
        let product = arrayOfElements[newItem]
        let divContainer = document.createElement("div");
        divContainer.classList.add("ul-container-1");
        detailsOfProduct.appendChild(divContainer);
        let checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.classList.add("list-item-1");
        divContainer.appendChild(checkboxElement);
        let skuCode = document.createElement("p");
        skuCode.textContent = product.SKU_CODE;
        skuCode.classList.add("list-item-2");
        divContainer.appendChild(skuCode);
        let skuName = document.createElement("p");
        skuName.textContent = product.SKU_NAME;
        skuName.classList.add("list-item-3");
        divContainer.appendChild(skuName);
        
        let drop_down = document.createElement("select");
        drop_down.value = "EA";
        drop_down.style.backgroundColor = "";
        
        drop_down.style.backgroundColor = "grey";
        drop_down.style.padding = "5px";
        drop_down.classList.add("list-item-4");
        for (let ite of array){
            let optionEle = document.createElement("option");
            optionEle.value = ite;
            optionEle.textContent = ite;
            optionEle.classList.add("text-dark");
            drop_down.appendChild(optionEle);

        }
        drop_down.onchange = function(event){
            quantityValueFunction(event);
        }
        divContainer.appendChild(drop_down);
        let divdivEle = document.createElement("div");
        divdivEle.classList.add("list-item-5");
        divContainer.appendChild(divdivEle);
        let divBarContainer = document.createElement("div");
        let firstItem = document.createElement("input");
        firstItem.type = "text";
        firstItem.value = "0";
        firstItem.classList.add("list-item-12","input-length");
        divdivEle.appendChild(firstItem);
        let secondItem = document.createElement("input");
        secondItem.type = "text";
        secondItem.value = "0";
        secondItem.classList.add("list-item-22","input-length");
        divdivEle.appendChild(secondItem);
        let thirdItem = document.createElement("input");
        thirdItem.type = "text";
        thirdItem.value = "0";
        thirdItem.classList.add("list-item-32","input-length");
        divdivEle.appendChild(thirdItem);
        let fourthItem = document.createElement("input");
        fourthItem.type = "text";
        fourthItem.value = "0";
        fourthItem.classList.add("list-item-42","input-length");
        divdivEle.appendChild(fourthItem);
        let fifthItem = document.createElement("input");
        fifthItem.type = "text";
        fifthItem.value = "0";
        fifthItem.classList.add("list-item-52","input-length");
        divdivEle.appendChild(fifthItem);
        let sixthItem = document.createElement("input");
        sixthItem.type = "text";
        sixthItem.value = "0";
        sixthItem.classList.add("list-item-62","input-length");
        divdivEle.appendChild(sixthItem);
        let seventhItem = document.createElement("input");
        seventhItem.type = "text";
        seventhItem.classList.add("list-item-72","input-length");
        seventhItem.value = "0";
        divdivEle.appendChild(seventhItem);
        divBarContainer.classList.add("ul-small");

        divContainer.appendChild(divBarContainer);

        
    }
}
function quantityValueFunction(event){
    if (event.target.value === "EA"){
        quantityValue = 1;
    }
    else if (event.target.value === "OU"){
        quantityValue = 10;
    }
    else{
        quantityValue = 20;
    }
}
let saveButton = document.getElementById("saveButton");
let fresh_array = []
let nameInputValue = "";
let descriptionInputValue = "";
let descriptionInput = document.getElementById("descriptionInput");
let nameInput = document.getElementById("nameInput");
nameInput.onchange = function(event){
    nameInputValue = event.target.value;
}
descriptionInput.onchange = function(event){
    descriptionInputValue = event.target.value;
}

let ulContainerMain = document.getElementById("ulContainerMain");
saveButton.onclick = function(){
    let object1 = {
        id: fresh_array.length +1,
        name: nameInputValue,
        description: descriptionInputValue,
        quantity: quantityValue
    }
    console.log(object1);
    fresh_array.push(object1);
    let containerElement = document.createElement("div");
    containerElement.classList.add("ul-container");
    ulContainerMain.appendChild(containerElement);
    let listItem1 = document.createElement("li");
    listItem1.classList.add("list-1");
    listItem1.textContent=object1.id;
    containerElement.appendChild(listItem1);
    let listItem2 = document.createElement("li");
    listItem2.classList.add("list-2");
    listItem2.textContent=object1.name;
    containerElement.appendChild(listItem2);
    let listItem3 = document.createElement("li");
    listItem3.classList.add("list-3");
    listItem3.textContent=object1.description;
    containerElement.appendChild(listItem3);
    let listItem4 = document.createElement("li");
    listItem4.classList.add("list-4");
    listItem4.textContent="text";
    containerElement.appendChild(listItem4);
    let listItem5 = document.createElement("li");
    listItem5.classList.add("list-5");
    listItem5.textContent="text";
    containerElement.appendChild(listItem5);

}

let displayPage = document.getElementById("displayPage");
let popupPage = document.getElementById("popupPage");
let AddProductButton = document.getElementById("AddProductButton");
let xIcon = document.getElementById("xIcon");
AddProductButton.onclick = function(){
  popupPage.classList.add("popup-container-1");
  displayPage.classList.add("front-page-container-2");   
}
xIcon.onclick = function(){
    popupPage.classList.remove("popup-container-1");
    popupPage.classList.add("popup-container");
    displayPage.classList.remove("front-page-container-2");
    displayPage.classList.add("front-page-container-1");
    console.log("hi");
}
    

