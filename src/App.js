
import './App.css';
import renderRoutes from './routes';
import {Suspense} from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
   <Suspense fallback={<div>Loading...</div>} >
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
   </Suspense>
  );
}

export default App;
