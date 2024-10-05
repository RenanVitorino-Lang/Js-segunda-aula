const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", ()=> {

    let nome = prompt("Qual é o seu nome?");

    if (nome) {

        let idade = prompt ("Qual é a sua idade?");


        if (isNaN(idade) || idade <= 0){
            mensagem.innerText ="Por favor, insira uma idade válida.";
            mensagem.style.color = "red";

        }else{

            if (idade <18) {
                mensagem.innerText = `Olá, ${nome}! Você tem apenas ${idade} anos.`;
                mensa.style.color = "blue";
            } else {
                mensagem.innerText = `Olá, ${nome}! Você é maior de idade com ${idade} anos,`;
                mensagem.style.color = "green";

            }
            console.log(`Nome do usuário: ${nome}`);
            console.log(`Idade do usuário: ${idade}`);
        }
    }else{
        mensagem.innerText = "Nome não fornecido. Por Favor, insira um nome."
        mensagem.style.color = "orange";
       
    }
}


)