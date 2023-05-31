var contador = 0;

function novaAba(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

function entrada() {
    var login = document.querySelector('#login');
    var senha = document.querySelector('#senha');
    var erro = document.querySelector("#erro");
    if (login && senha && erro) {
        var login1 = 'AlunosSESI2023';
        var senha1 = 'devsistemas';
        contador = contador + 1;
        console.log(contador);
        if (login.value == login1 && senha.value == senha1) {
           
            novaAba('um.html')

        }
        else if (contador > 4) {
            novaAba('dois.html')
        }
        else {
            erro.style.color = "red";
        }
    }
}
