import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState(null); // Set initial state to null

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await axios.get('http://localhost:4000/randomq');
        setQuote(response.data); // Set the state to the fetched quote object
      } catch (error) {
        console.error('Error fetching quote', error);
      }
    };

    fetchRandomQuote();
  }, []);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold underline text-center">
          Rando Quote
        </h1>
      </div>

      <div>
        {quote ? ( // Render the quote if it exists
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-center">
              {quote.text} {/* Display the quote text */}
            </h2>
            <p className="text-xl text-center">
              - {quote.author} {/* Display the quote author */}
            </p>
          </div>
        ) : (
          <p className="text-center">Loading...</p> // Show loading text while fetching the quote
        )}
      </div>
      
      <div className="flex items-center justify-center">
        <div className="rounded-lg border-4 p-4 border-neutral-900">
          This is for the quote
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-center">
          This is going to be for the footer.
        </h1>
      </div>
    </div>
  );
}

export default App;
