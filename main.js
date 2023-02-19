document.addEventListener('DOMContentLoaded', function () {

    const nome = document.getElementById('nome');
    const userName = document.getElementById('userName');
    const repositorio = document.getElementById('repositorio');
    const sequidores = document.getElementById('sequidores');
    const seguindo = document.getElementById('seguindo');
    const avatar = document.getElementById('avatar');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/Stanley-Felix-Bergamo')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            console.log(json)
            nome.innerText = json.name;
            userName.innerText = json.login;
            repositorio.innerText = json.public_repos;
            sequidores.innerText = json.followers;
            seguindo.innerText = json.following;
            avatar.src = json.avatar_url;
            link.href = json.html_url;

        })

})