import { useState } from 'react';
import './App.css';

function App() {
  const [liczba, Setliczba] = useState(20);
  const [liczbpierwsza, Setliczbapierwsza] = useState([]);
  const wypisz = () => {
    const limit = parseInt(liczba, 10);
    const lista = Array(limit + 1).fill(true);
    lista[0] = lista [1] = false;
    
    for ( let i = 2; i*i <= limit; i++){
      if(lista[i]){
        for (let j = i* i; j <= limit; j+=i){
          lista[j] = false;
        }
      }
    }
    const liczbpierwsza = lista.map((isPierwsza, index) => isPierwsza ? index : null).filter(num => num !== null);
    Setliczbapierwsza(liczbpierwsza);
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Sito Erastotenesa</h1>
      <input type='number' step={3} defaultValue={20} value={liczba} onChange={e => Setliczba(e.target.value)}/>
      <button onClick={wypisz} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Wypisz liczby pierwsze</button>
      <h2 className="text-2xl mt-4">Liczby pierwsze do {liczba}:</h2>
      <ul className="mt-2">
        {liczbpierwsza.map((pierwsza, index) => {
          const dlugosc = liczbpierwsza.length;
          const colorIntensity = (Math.round((800 / dlugosc) * (index + 1) / 100) * 100)+100;
          return (
            <li
              key={pierwsza}
              className={`text-blue-${colorIntensity} font-semibold`}
            >
              {pierwsza}
            </li>
          );
        })}
      </ul>
      <h3 className='text-xl mt-3'>Łącznie jest ich {liczbpierwsza.length}</h3>
      <div>
        <p className='text-blue-100'></p>
        <p className='text-blue-200'></p>
        <p className='text-blue-300'></p>
        <p className='text-blue-400'></p>
        <p className='text-blue-500'></p>
        <p className='text-blue-600'></p>
        <p className='text-blue-700'></p>
        <p className='text-blue-800'></p>
        <p className='text-blue-900'></p>
      </div>
    </div>
  );
}

export default App;
