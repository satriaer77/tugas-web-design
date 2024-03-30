
// ===> CREATE BASEURL
var base_url = window.location.origin;
var host     = window.location.host;


var pathArray = window.location.pathname.split("/");
pathArray.unshift(base_url);
pathArray.pop();
let url = "";
const menuHalaman = document.querySelector('#menuHalaman').dataset.menu;

for (pathName of pathArray) {
    url += pathName + "/";
}
// ===> END CREATE BASEURL


function parseURLParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
}


// console.log(parseURLParams('id'));



///=========================== Load another file HTML ===========================/// 
function loadHTML(file, section) {

    // const menuHalaman = parseURLParams().get("menu");
   
    // console.log(menuHalaman);
    //============ AJAX with xhr ============//
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status == 200) {
            section.innerHTML = xhr.responseText;
            
            document.querySelector(`#${menuHalaman}`).classList.add('active');
            
        }
        else {
            console.warn("Nggak bisa dapat hehe...");
        }
    }
    xhr.open('get', file, true);
    xhr.send();
    //============ End AJAX with xhr ============//

}

const navbarSection  = document.getElementById("navbar");
const sidebarSection = document.getElementById("sidebar");
const footerSection  = document.getElementById("footer");
loadHTML(url + 'templates/navbar.html', navbarSection);
loadHTML(url + 'templates/sidebar.html', sidebarSection);
loadHTML(url + 'templates/footer.html', footerSection);

