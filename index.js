
var contentOfHeading = document.getElementsByClassName("tab-contents");
 
function opentab(tabname){
for(j of contentOfHeading){
    j.classList.remove("active-tab");

}

document.getElementById(tabname).classList.add("active-tab")
}
