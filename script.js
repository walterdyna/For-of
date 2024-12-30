

const myName = "Alex";
const user = ["Rodolfo", "Maria", "João", "jonas", "Pedro"];

for (const latter of myName) {
    console.log(latter)
}//letras

for (const name of user) {
    console.log(name)
    }//nome

    //----------------------------------------------------------


let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {name: "Rodolfo", phone: "123456"},
    {name: "Maria", phone: "123456"},
    {name: "Pedro", phone: "123456"},
    {name: "João", phone: "123456"},
    {name: "jonas", phone: "123456"},
    ]

function search(){

    for(const contact of contacts){

        if(input.value.toLowerCase === contact.name.toLowerCase()){
            p.innerHTML = `Contato Encontrato Nome: ${contact.name} Telefone: ${contact.phone}`
        
        break
        }else {
            p.innerHTML = "Contato Não encontrado, tente novamente..."
        }
    }
}