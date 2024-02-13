import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Home = () => {
  const [ poster, setPoster] = useState ([]);
  // poster =dato final // setPoster realiza un cambio en ml esado de Poster // =useState le pasamos datos con un estado con un array vacio de la peticion a mi api ue se llena de datos gracias a SETPOSTER

useEffect {() => {
  const fetchPoster = async () => { //estamos declarando la variable de nuestra función fetch la cual hace una peticiona nustro servidor y nos permite pasarle los datos que se encentran en nuestro json 
    try { 
      const response = await fetch('');
      const data = await response.json();
      setPoster(data)
    }
    catch (error) {
      console.error('erroral completar:', error);
    }
    };
  }
}
} 

