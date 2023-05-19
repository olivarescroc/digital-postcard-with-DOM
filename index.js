//Ponemos el body con un fondo negro
const body = document.body;
body.classList.add("bg-black");

const button = document.createElement("BUTTON")
button.innerText = 'Generar postcard'
button.style.background = 'white'
button.style.color = 'black'

button.addEventListener('click', () => {
    generatePostCard()
})

body.append(button);

const generatePostCard = () => {
    //Contenedor principal de nuestro postcard
    const contenedor = document.createElement("DIV")
    contenedor.classList.add("contenedor")
    body.append(contenedor)

    //Heading del postcard
    const heading = document.createElement("DIV")
    const h1 = document.createElement("H1")
    const image = document.createElement("IMG")
    heading.classList.add("heading")
    heading.append(h1, image)
    h1.innerHTML = 'My Postcard';
    image.src = 'https://4geeks.com/_next/image?url=%2Fstatic%2Fimages%2F4geeks.png&w=256&q=75';
    contenedor.append(heading)

    //Body del postcard
    const cuerpo = document.createElement("DIV")
    const left = document.createElement("DIV")
    const right = document.createElement("DIV")
    //Parrafos
    const p1 = document.createElement("P")
    const p2 = document.createElement("P")
    //Inputs
    const input1 = document.createElement("INPUT")
    const input2 = document.createElement("INPUT")
    const input3 = document.createElement("INPUT")

    cuerpo.classList.add("cuerpo")
    left.classList.add("left")
    right.classList.add("right")

    p1.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque exercitationem autem repellat, praesentium pariatur architecto atque, cupiditate commodi consequuntur, mollitia non fugit. Aperiam'
    p2.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque exercitationem autem repellat'

    let inputs = [input1, input2, input3]

    for (let i in inputs) {
        if (i == 0) {
            inputs[i].placeholder = 'Some Name'
        } else if (i == 1) {
            inputs[i].placeholder = 'Some Email'
        } else if (i == 2) {
            inputs[i].placeholder = 'Some Comment'
        }
    }

    left.append(p1, p2)
    right.append(input1, input2, input3)
    cuerpo.append(left, right)
    contenedor.append(cuerpo)

    //Footer del postcard
    const footer = document.createElement("DIV")
    const button = document.createElement("BUTTON")

    button.innerText = 'Send Message'

    footer.classList.add("footer")
    footer.append(button)
    contenedor.append(footer)
}