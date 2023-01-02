import "./styles.css";
import { useState } from "react";

const bookDB = {
  action: [
    { name: "The Lost City", rating: "6.1/10" },
    { name: "Bad Boys", rating: "6.8/10" },
    { name: "Den of Thieves", rating: "7.0/10" },
    { name: "Till Death", rating: "5.8/10" },
    { name: "Jack Reacher", rating: "7.0/10" }
  ],

  drama: [
    { name: "Captain Phillips", rating: "7.8/10" },
    { name: "127 Hours", rating: "7.6/10" },
    { name: "The Passion of the Christ", rating: "7.2/10" },
    { name: "Miss Sloane", rating: "7.5/10" },
    { name: "The Godfather ", rating: "9.2/10" }
  ],
  fantasy: [
    { name: "Chronicles of Narnia", rating: "6.9/10" },
    { name: "King Kong", rating: "7.2/10" },
    { name: "Harry Potter", rating: "7.6/10" },
    { name: "The Lord of The Rings", rating: "6.9/10" },
    { name: "Avatar", rating: "7.9/10" }
  ],
  horror: [
    { name: "The Sixth Sense", rating: "8.2/10" },
    { name: "28 Days Later", rating: "7.5/10" },
    { name: "The Addiction", rating: "6.4/10" },
    { name: "The Lost Boy", rating: "7.2/10" },
    { name: "The Invitation ", rating: "5.2/10" }
  ]
};

export default function App() {
  const books = Object.keys(bookDB);
  const [genre, setGenre] = useState("action");

  const onClick = (book) => {
    setGenre(book);
  };
  return (
    <div className="App">
      <h1>
        Get Movie For Me
        <span role="img" aria-label="popcorn">
          🍿
        </span>
      </h1>
      <h4>
        Looking for Movie!! Use recommendation Engine to get some suggestion.
      </h4>
      <div className="books">
        {books.map((book) => {
          return (
            <span key={book} onClick={() => onClick(book)} className="book">
              {book}
            </span>
          );
        })}
      </div>
      <hr />
      <div className="details">
        <ul>
          {bookDB[genre].map((book) => {
            return (
              <li key={book.name}>
                <p className="bookName">Movie : {book.name}</p>
                <p className="bookrating">IMDb : {book.rating}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
