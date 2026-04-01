import eventos from './pages/eventos';

const getData = (page) =>{
    switch(page){
        case "/html/eventos.html":
            return eventos;
    }
    return{};
}

export default getData;