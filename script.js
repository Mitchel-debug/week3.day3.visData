console.log(data.results)
let nameArray = [];

array2 = [];
function randomUniqueNum(range, outputCount){

    let arr9 = [];
    for (let i = 1; i <= range; i++) {
      arr9.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr9[random]);
      arr9[random] = arr9[range - i];
    }
  
    return result;
}
var rander = randomUniqueNum(25, 25);

for (let i = 0; i < 25; i++){
    rand = rander[i] - 1;
    let name4 = {
    name: data.results[rand].name.title + " " + data.results[rand].name.first + " " + data.results[rand].name.last,
    email: data.results[rand].email,
    dob: data.results[rand].dob.date,
    location: data.results[rand].location.street.number + ", " + data.results[rand].location.street.name + ", " + data.results[rand].location.country,
    Phone: data.results[rand].phone,
    imgObj: data.results[rand].picture.large
    }
    array2.push(name4);
    
}
nameArray.push(...array2);
// console.log(data.results[randNum].picture.large)
// let myVar = document.createElement('p');
// myVar.innerHTML = data.results[0].email;
console.log(nameArray);
// const pageBody = document.querySelector("body");
// pageBody.appendChild(myVar);
function createCardDiv(nameObj){
    let iDiv = document.createElement("div");
    iDiv.className = "characterSheet";
    let innerDiv = document.createElement("div");
    innerDiv.className = "imageDiv";
    let imgPath = document.createElement("img");
    imgPath.src = nameObj.imgObj;
    innerDiv.appendChild(imgPath);
    let tag = document.createElement("p");
    tag.className = "description";
    let textNode = data.results[0].name.title;
    let textNode2 = data.results[0].name.first;
    let linebreak = document.createElement("br");
    let linebreak2 = document.createElement("br");
    let linebreak3 = document.createElement("br");
    let linebreak4 = document.createElement("br");
    let textNode3 = data.results[0].name.last;

    let text = document.createTextNode("Name: " + nameObj.name);
    let text2 = document.createTextNode("Email: " + nameObj.email);
    let text3 = document.createTextNode("DOB: " + nameObj.dob);
    let text4 = document.createTextNode("Location: " + nameObj.location);
    let text5 = document.createTextNode("Phone: " + nameObj.Phone);
    tag.appendChild(text);
    tag.appendChild(linebreak);
    tag.appendChild(text2);
    tag.appendChild(linebreak2);
    tag.appendChild(text3);
    tag.appendChild(linebreak3);
    tag.appendChild(text4);
    tag.appendChild(linebreak4);
    tag.appendChild(text5);

// innerDiv.appendChild(tag);
    iDiv.appendChild(innerDiv);
    iDiv.appendChild(tag);
    let container = document.getElementById("containerDiv");
    return iDiv;
}

for(let i = 1; i < nameArray.length; i++){
    let newCard = createCardDiv(nameArray[i]);
    let containerDiv = document.querySelector("#containerDiv");
    containerDiv.appendChild(newCard);
}