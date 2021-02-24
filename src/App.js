import React from 'react';
import './App.css';
import BookShop from './BookShop';
import Books from './Books';
import BreadShop from './BreadShop';
import Bread from './Bread';

export default function App() {

  return (
    <BreadShop>
      <BookShop>
        <Books />
      </BookShop>
      <Bread/>
    </BreadShop>
  );
}