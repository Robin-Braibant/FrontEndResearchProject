let theme;
let counter = 4;
let allThemes = [{"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"video":"De BusVideo","shareWithColleagues":false,"searchTerms":null,"code":"44242"},
    {"id":2,"owner":null,"title":"De Bus","shareWithColleagues":false,"searchTerms":null,"code":"44242"}];

if(allThemes.length >= 7){
    let footer = document.getElementsByClassName("footer");
    footer[0].style.position = "unset";
}

for (theme in allThemes){
    if(counter === 4) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row-fluid");
        rowDiv.classList.add("rowDiv");
        rowDiv.setAttribute("onclick","clickById(this.id)")
        document.getElementById("themesContainer").appendChild(rowDiv);
        counter = 0;
    }
        let extraDiv = document.createElement("div");
        extraDiv.classList.add("extraDiv");
        extraDiv.classList.add("span3");
        extraDiv.id = theme;
        let image = document.createElement("img");
        image.style.position ="sticky";
        image.style.zIndex= '-1';
        image.src = ("../Images/icons8-play-button-512.png");
        extraDiv.appendChild(image);

        for (part in allThemes[theme]){

            let paragraph = document.createElement("p");
            paragraph.style.position ="sticky";
            paragraph.style.zIndex= '-1';
            paragraph.innerText += allThemes[theme][part];
            if (part === 'video'){
                extraDiv.id = 'video';
            }
            extraDiv.appendChild(paragraph);
        }
        rowDiv.appendChild(extraDiv);
        counter++;
}

function clickById(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    console.log(e.id);
    switch (e.id){
        case 'video':
            window.location.href = 'videos.html';
            break;
        default:
            window.location.href = 'Test.html';
            break;
    }
};

function clickHome(){
    window.location.href = 'homepage.html';
}