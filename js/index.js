var siteNameInput = document.getElementById("site-name");
var siteUrlInput = document.getElementById("site-url");

var addList = [];

if(localStorage.getItem("siteContainer") !==null ){
    addList = JSON.parse(localStorage.getItem("siteContainer"));
    displayData();
} 


function addSite(){

    if( validName() == true && validUrl() == true){
        var site = {

            name : siteNameInput.value,
            url : siteUrlInput.value
    
        }
        addList.push(site);
    
        localStorage.setItem("siteContainer" , JSON.stringify(addList));
    
        displayData();
    
        clear();
    
        console.log(addList);
    }
}


function clear(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
    siteNameInput.classList.remove("is-valid");
    siteUrlInput.classList.remove("is-valid");
}


function displayData(){

    var container = "";

    for(var i = 0; i<addList.length; i++){
        container += 
        `<tr>
            <td>${i +1}</td>
            <td>${addList[i].name}</td>
            <td><button onclick="urlItem(${i})" class=" btn rounded-3 btn-visit text-light "><i class="fa-solid fa-eye text-light"></i> visit </button></td>
            <td><button onclick="deleteItem(${i})" class=" btn rounded-3 btn-danger"><i class="fa-solid fa-trash-can text-light"></i> delete</button></td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = container;

}

function deleteItem(indexItem){
    addList.splice(indexItem, 1)

    localStorage.setItem("siteContainer" , JSON.stringify(addList));

    displayData();
}

function urlItem(urlIndex){
    
    window.open(addList[urlIndex].url);

    // localStorage.setItem("siteContainer" , JSON.stringify(addList));

    // displayData();
}

function validName(){
    var validMsg = document.getElementById("validmsg");
    var SubBtn = document.getElementById("sub-btn");
    var text = siteNameInput.value;
    var regex = /^[\w]{3,}$/ ;

    if(regex.test(text) == true)

        {
            siteNameInput.classList.add("is-valid");
            siteNameInput.classList.remove("is-invalid");
            validMsg.classList.add("d-none")
            // SubBtn.classList.add("d-none")
            return true;
        }
    else
        {
            siteNameInput.classList.add("is-invalid");
            siteNameInput.classList.remove("is-valid");
            validMsg.classList.remove("d-none");
            // SubBtn.classList.remove("d-none")
            return false;
        }    
}

function validUrl(){
    var validUrl = document.getElementById("validurl");
    var text = siteNameInput.value;
    // var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ ;
    // var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    // var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var regex = /^[\w]{3,}$/ ;



    if(regex.test(text) == true)

        {
            siteUrlInput.classList.add("is-valid");
            siteUrlInput.classList.remove("is-invalid");
            validUrl.classList.add("d-none")
            return true;
        }
    else
        {
            siteUrlInput.classList.add("is-invalid");
            siteUrlInput.classList.remove("is-valid");
            validUrl.classList.remove("d-none")
            return false;
        }    
}