function clickById(e){
    e = e || window.event;
    e = e.target || e.srcElement;
    switch(e.id){
        case 'video':
            window.location.href = 'themes.html';
            break;
        case 'dialogue':
            window.location.href = 'themes.html';
            break;
        case 'collage':
            window.location.href = 'themes.html';
            break;
        case 'code':
            // Get the modal
            let modal = document.getElementById('myModal');
            // Get the button that opens the modal
            let btn = document.getElementById(e.id);
            // Get the <span> element that closes the modal
            let span = document.getElementsByClassName("close")[0];
            // When the user clicks on the button, open the modal
            modal.style.display = "block";

            // // When the user clicks on <span> (theme), close the modal
            span.onclick = function() {
                modal.style.display = "none";
                document.getElementById("codeInput").value = '';
            };

            // When the user clicks anywhere outside of the modal, close it
            // window.onclick = function(event) {
            //     if (event.target == modal) {
            //         modal.style.display = "none";
            //     }
            // };
            break;
    }
}

function enterCode(e){
    var code = document.getElementById("codeInput").value;
    console.log(code);
    e = e || window.event;
    e = e.target || e.srcElement;
    switch (e.id){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (code < 1000){
                document.getElementById("codeInput").value = code + e.id;
            } else {
                document.getElementById("codeInput").value = code;
            }
            break;
        case 'enter':
            if (code > 999){
                window.location.href = "titlepage.html" + '?' + code;
            }
    }

}



