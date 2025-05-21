import React from 'react';
import Book from './Book';

const Books = () => {
    return (
      <div>
        <h1 className='text-4xl font-extrabold text-center my-8'>Books</h1>
          <div className='grid md:grid-cols-3'>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
        </div>
      </div>
    );
};

export default Books;