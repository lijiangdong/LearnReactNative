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
            alert(responseData.id)
        })
        .catch((error) => {
            alert(error)
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
            console.log(responseJson);
            alert(responseJson[0].id)
        })
        .catch((error)=>{
            alert(error)
        })
}

function getUserInfo(username) {
    return async (username)=>{

    }

}
module.exports = {getRepos,getProfile}
