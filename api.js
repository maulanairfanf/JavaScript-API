function fetchData() {
    fetch("https://reqres.in/api/users")
        .then(response => {
            // console.log(response);
            if (!response.ok) {
                throw Error("error");
            }
            return response.json()
        }).then(data => {
            // console.log(data.data)
            const html = data.data.map(user => {
                return `
                    <p> Name : ${user.first_name} ${user.last_name}</p>
                    <p> Email : ${user.email} </p>
                    `
            })
            // console.log(html);
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(eror);
        })
}

fetchData();

function postData() {
    fetch("https://reqres.in/api/users"), {
            method: 'POST',
            headers: {
                'content-Type': 'application.json'
            },
            body: {
                name: "morpheus",
                job: "leader"
            }
        }
        .then(response => {
            if (!response.ok) {
                throw Error("error");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}
