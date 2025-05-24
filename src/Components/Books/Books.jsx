
import Book from './Book';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
  const AllBook = useLoaderData();
  // console.log(AllBook)
    return (
      <div>
        <h1 className='text-4xl font-extrabold text-center my-8'>Books</h1>
          <div className='grid gap-2 md:grid-cols-3'>
          
         {
        AllBook.map(book=><Book key={book.id} book={book}></Book>)
         }
        </div>
      </div>
    );
};

export default Books;