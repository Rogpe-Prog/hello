import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarCustom from './componentes/NavbarCustom'
import JumbotronCustom from './componentes/JumbotronCustom'
import CarrouselCustom from './componentes/CarrouselCustom'
import FooterCustom from './componentes/FooterCustom'

function App() {
  return (
    <div className="App">
      <NavbarCustom />
      <JumbotronCustom />
      <CarrouselCustom />
      <FooterCustom />
    </div>
  );
}

export default App;
