import eventos from './pages/eventos';
import opiniones from './pages/opiniones';

const getData = (page) =>{
    switch(page){
        case "/html/eventos.html":
            return eventos;
        break;

        case "/html/opiniones.html":
            return opiniones;
    }
    return{};
}

export default getData;