import '../css/componentes.css';
// import logoImg from '../assets/imgs/webpack-logo.png';

export const saludar = (nombre = 'no name') => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola ${nombre}!!!`;

    document.body.append(h1);

    //Img
    // const img = document.createElement('img');
    // img.src = logoImg;
    // document.body.append(img);
};
