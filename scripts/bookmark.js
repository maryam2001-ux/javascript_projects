 // *html elements 


var NameLink = document.getElementById('NameLink');
var LinkInput = document.getElementById('LinkInput');
var LinkContainer = document.getElementById('LinkContainer');
var searchInput = document.getElementById('searchInput');

var LinkList = JSON.parse(localStorage.getItem("LinkList")) || [];

// * variabls


if(localStorage.getItem("LinkList") != null) {
  var LinkList = JSON.parse(localStorage.getItem("LinkList"));
    for (var i = 0; i < LinkList.length; i++) {
      displayLink(i);
    }
  }
  




// * functions

function addLink() { 
  
  
  var NewLink = {
    name: NameLink.value ,
    Link :LinkInput.value 

  }
  
  
  LinkList.push(NewLink);
  localStorage.setItem("LinkList", JSON.stringify(LinkList));
  displayLink(LinkList.length -1);
  ClearForm();
  
  
  };
  

  function displayLink(index) {

    var Links = LinkList[index];
  
    var CardHtml = `
    
      <div class="card my-3" style="width: 70rem; ">
            <div class="card-body d-flex gap-2 justify-content-between align-items-center">
              <h5 class="card-title text-danger"><strong>linkName:</strong> ${Links.name}</h5>
              <p class="card-text">link example : <span class="text-muted"> <strong>link:</strong> ${Links.Link}</span></p>
              <div class="btn">
                <a href="#" class="btn btn-success mx-2" onclick='updateLink(${index})'>update</a>
                <a href="#" class="btn btn-danger" onclick='deleteList(${index})'>delete</a>
              </div>
            </div>
          </div>
    `;
  
    LinkContainer.innerHTML += CardHtml;
  
  }


function ClearForm() {
  NameLink.value = "";
  LinkInput.value = "";
}


function updateLink(index) {
  var updatedName = prompt("Enter updated Link name:", LinkList[index].name);
  var updatedLink = prompt("Enter updated Link :", LinkList[index].Link);
  

  if (updatedName !== null) LinkList[index].name = updatedName;
  if (updatedLink !== null) LinkList[index].Link = updatedLink;

  localStorage.setItem("LinkList", JSON.stringify(LinkList));

  LinkContainer.innerHTML = "";
  for (var i = 0; i < LinkList.length; i++) {
    displayLink(i);
  }
}

function deleteList(index) {

LinkList.splice(index, 1);
localStorage.setItem("LinkList", JSON.stringify(LinkList));

LinkContainer.innerHTML = "";
for (var i = 0; i < LinkList.length; i++) {
  displayLink(i); // Redisplay all links
}}



function searchLink() {
  LinkContainer.innerHTML = "";

  for (var i = 0; i < LinkList.length; i++) {
    if (LinkList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())
    
    ) {
      displayLink(i); 

  }
  }
  }
