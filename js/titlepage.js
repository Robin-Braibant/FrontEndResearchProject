// var url = window.location.href;
// var splitUrl = url.split('?');
// console.log(splitUrl[1]);

fetch("https://localhost:5001/api/exercisesets/1234")
    .then(function(response) {
        console.log(response);
        return response.json();
    })
