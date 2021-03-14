let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let data = document.querySelector('#data-send');
    let dataSend = document.querySelector('#first > input').value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `XMLHttpRequest.php?firstName=${dataSend}`);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function () {
        let responseObj = xhr.response;
        // alert(responseObj.message);
        console.log(responseObj);
        data.innerHTML = responseObj.message;
    };
});