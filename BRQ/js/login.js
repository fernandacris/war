//window.document.onload() = function () {

var config = {
    headers: {
        "Accept": "application/json"
        , 'Content-Type': 'application/json'
    }
};

const btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('ei');
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    const envio = {
        "email": email,
        "senha": senha
    }

    data = JSON.stringify(envio);

    axios.post("http://172.16.10.3:8080/ServiceDesk_BACKEND/rest/auth/jwt", data, config)
        .then(function (response) {
            localStorage.clear();
            localStorage.setItem('token', 'Bearer ' + response.data.token);
            localStorage.setItem('idChamado', '1');
            location.href = "inicio.html";
        })
        .catch(function (error) {
            console.log(error.response);
            alert("Email ou Senha incorretos");
        });
});