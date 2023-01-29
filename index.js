// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Kevin is the champion";
document.body.append(newHeader);
