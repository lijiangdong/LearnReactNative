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

function getRepos(username) {
    let url = 'https://api.github.com/users/' + username + '/repos' + params + '&per_page=100';
    console.log(url);
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
        })
        .catch((error) => {
        })
}

function getUserInfo(username, callback) {

    let profileUrl = 'https://api.github.com/users/' + username;
    let reposUrl = 'https://api.github.com/users/' + username + '/repos' + params + '&per_page=100';
    let urls = [profileUrl, reposUrl];

    Promise.all(urls.map(fetch))
        .then(response => {
            return Promise.all(response.map(res => res.json()))
        })
        .then(texts => {
            // let profile = texts[0];
            let repos = texts[1];
            alert(texts[0].login);
            callback({
                profile: {
                    login: "lijiangdong",
                    avatar_url: "https://avatars2.githubusercontent.com/u/17037486?v=4"
                },
                score: 90
            })
        })
        .catch((error) => {
            alert(error);
            console.log(error)
        })


}

function calculateScore(profile, repos) {
    let followers = profile.followers;
    let totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}

function getStarCount(repos) {
    return repos.reduce(function (count, repo) {
        return count + repo.stargazers_count
    }, 0);
}


module.exports = {getRepos, getProfile, getUserInfo}
