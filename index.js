//Ponemos el body con un fondo negro
const body = document.body;                 //guarda el body del documento actual en una variable llamada también body.
body.classList.add("bg-black");             //aplica una clase al boddy, tambien se podria agregar el color de fondo asi body.style.backgroundColor = "black";

const button = document.createElement("BUTTON")     //crea un botón
button.innerText = 'Generar postcard'               //agrega texto al botón
button.style.background = 'red'                   //agrega estilo al botón directamente, sin usar clase
button.style.color = 'black'                        //color del texto del botón

button.addEventListener('click', () => {generatePostCard()})    //agrega listener de click al botón para que al presionarle se genera la postal



body.append(button);           //agrega el botón al final del body                         

const generatePostCard = () => {                        //función que genera la postal
    //Contenedor principal de nuestro postcard
    const contenedor = document.createElement("DIV")    //crea un div en el documento
    contenedor.classList.add("contenedor")              //aplica la clase contenedor al elemento creado
    body.append(contenedor)                             //agrega el div contenedor al body

    //Heading del postcard
    const heading = document.createElement("DIV")       //crea un div en el documento
    const h1 = document.createElement("H1")             //crea un h1 en el documento ("My Postcard")
    const image = document.createElement("IMG")         //crea una imagen en el documento (logo)
    heading.classList.add("heading")                    //aplica la clase heading al div heading
    heading.append(h1, image)                           //agrega h1 e img al div heading en el orden dado
    h1.innerHTML = 'My Postcard';                       //Escribe el contenido de h1
    image.src = 'https://4geeks.com/_next/image?url=%2Fstatic%2Fimages%2F4geeks.png&w=256&q=75';        //agrega fuente a la imagen
    contenedor.append(heading)                          //agrega el div heading al div contenedor

    //Body del postcard
    const cuerpo = document.createElement("DIV")        //crea el div cuerpo
    const left = document.createElement("DIV")          //crea el div left
    const right = document.createElement("DIV")         //crea el div right
    //Parrafos
    const p1 = document.createElement("P")              //crea el parrafo p1
    const p2 = document.createElement("P")              //crea el parrafo p2
    //Inputs
    const input1 = document.createElement("INPUT")      //crea la entrada input1
    const input2 = document.createElement("INPUT")      //crea la entrada input2
    const input3 = document.createElement("INPUT")      //crea la entrada input3

    cuerpo.classList.add("cuerpo")                      //aplica la clase cuerpo al div cuerpo
    left.classList.add("left")                          //aplica la clase left al div left
    right.classList.add("right")                        //aplica la clase right al div right


    //se le entrega contenido a los párrafos p1 y p2
    p1.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque exercitationem autem repellat, praesentium pariatur architecto atque, cupiditate commodi consequuntur, mollitia non fugit. Aperiam'
    p2.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque exercitationem autem repellat'


    let inputs = [input1, input2, input3]      //declara arreglo con las inputs previamente creadas     

    for (let i in inputs) {
        if (i == 0) {
            inputs[i].placeholder = 'Some Name'         //texto para el input
        } else if (i == 1) {
            inputs[i].placeholder = 'Some Email'        //texto para el input
        } else if (i == 2) {
            inputs[i].placeholder = 'Some Comment'      //texto para el input
        }
    }



    left.append(p1, p2)                                 //agrega los párrafos p1 y p2 al div left
    right.append(input1, input2, input3)                //agrega los 2 inputs al div right
    cuerpo.append(left, right)                          //agrega los div left y right al div cuerpo
    contenedor.append(cuerpo)                           //agrega el div cuerpo al div contenedor

    //Footer del postcard
    const footer = document.createElement("DIV")            //crea div footer en el documento
    const button = document.createElement("BUTTON")         //crea botón button en el documento

    button.innerText = 'Send Message'                       //escribe el botón button de la postal

    footer.classList.add("footer")                      //aplico la clase footer al div footer
    footer.append(button)                               //agrega el botón button al div footer
    contenedor.append(footer)                           //agrega el div footer al div contenedor


}