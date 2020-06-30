
// with httprequest

// var request = new XMLHttpRequest();
// request.onload = function() {
//     var data = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.result[0]);
// }
// request.onerror = function() {
//     console.log('Error :-S', error);
// }
// request.open('get', 'https://readerapi.codepolitan.com/articles', true);
// request.send();


//with fetch api

// fetch('https://readerapi.codepolitan.com/articles')
//     .then(function (response) {
//         if (response.status !== 200) {
//             console.log('Error : ' + response.status);
//             return;
//         }

//         response.json()
//         .then(function (data) {
//             console.log(data);
//         })
//     }).catch(function (error) {
//         console.log('Error : ' + error);
//     });


// promise with fetch

// fetch('https://readerapi.codepolitan.com/articles')
//     .then(function (response) {
//         if (response.status !== 200) {
//             console.log('Error : ' + response.status);
//             // Method reject() akan membuat blok catch terpanggil
//             return Promise.reject(new Error(response.statusText));
//         } else {
//             // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
//             return Promise.resolve(response);
//         }
//     }).then(function(response) {
//         // Mengembalikan sebuah Promise berupa objek/array JavaScript
//         // yang diubah dari teks JSON. 
//         return response.json();
//     }).then(function(data) {
//         // Objek/array JavaScript dari response.json() masuk lewat data.
//         console.log(data);
//     }).catch(function(error) {
//         // Parameter error berasal dari Promise.reject() 
//         console.log('Error : ' + error);
//     });

// promise chain with fetch

function status (response){
    if(response.status !== 200){
        console.log('error : '+ response.status);
        return Promise.reject(new Error(response.statusText));
    }
    else{
        return Promise.resolve(response);
    }
}

function json (response){
    return response.json();
}

function error (error){
    return console.log("error : " + error)
}

fetch("https://readerapi.codepolitan.com/articles")
    .then(status)
    .then(json)
    .then(function(data){
        console.log(data);
    })
    .catch(error)