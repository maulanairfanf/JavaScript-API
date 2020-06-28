console.log("start")

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("now we have the data");
            resolve({
                userEmail: email
            });
        }, 3000);
    })
}

function getUserVideo(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(["video1", "video2"]);
        }, 2000);
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tittle of videos')
        }, 2000);
    })
}

// const user = loginUser("maulan@gmail.com", 123456, user => {
//     console.log(user);
//     getUserVideo(user.userEmail, videos => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         })
//     })
// });


// loginUser('maul','password')
// .then(user => getUserVideo(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));

async function displayUser(){
    try{
    const loggedUser = await loginUser('maul', 12345);
    const videos = await getUserVideo(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
    }
    catch(err){
        console.log("cannot get the videos")
    }
    
}

displayUser();

// console.log("finish")

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("stuff from yt");
//         resolve({
//             videos: [1, 2, 3, 4, 5]
//         });
//     }, 2000);
// });

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("stuff from fb");
//         resolve({
//             user: "name"
//         });
//     }, 5000)
// });

// Promise.all([yt, fb]).then(result => console.log(result));