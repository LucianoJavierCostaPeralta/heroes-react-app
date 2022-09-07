import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './content/HeroesApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>
)
