var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getProfile(username) {

    let url = 'https://api.github.com/users/' + username + params;
    console.log(url);
    fetch(url)
        .then((response) => {
            let data = response.json();
            console.log(data);
            return data;
        })
        .then((responseData) => {
        })
        .catch((error) => {
        })
}

function getRepos(username){
    let url = 'https://api.github.com/users/' + username + '/repos' + params + '&per_page=100';
    console.log(url);
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((responseJson)=>{
        })
        .catch((error)=>{
        })
}

function getUserInfo(username) {

    Promise.all(getProfile(username),getRepos(username))
        .then((results)=>{
            alert(results[0])
        })
        .catch((error)=>{
            alert(error)
        })


}
module.exports = {getRepos,getProfile,getUserInfo}
