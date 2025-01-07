

/*O for...of no JavaScript é uma estrutura usada para percorrer elementos de objetos que podem ser iterados, como arrays, strings, conjuntos e mapas. Ele permite acessar diretamente os valores desses elementos, um por um, de forma simples e organizada.

Por exemplo, em um array de frutas, o for...of percorre cada fruta, permitindo que você trabalhe com cada uma separadamente. Da mesma forma, ao usá-lo com uma string, ele vai passar por cada letra. Ele é útil porque evita a necessidade de lidar com índices ou métodos mais complexos, tornando o código mais claro e legível.
*/

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