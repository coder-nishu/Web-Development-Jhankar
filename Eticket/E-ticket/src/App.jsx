// src/App.jsx
import { useState, useEffect, useRef } from 'react';
import './App.css';
import ETicket from './ETicket.jsx';
import { toPng } from 'html-to-image';

function App() {
  // State to hold ticket data fetched from the backend. Starts as null.
  const [ticketData, setTicketData] = useState(null);
  const ticketRef = useRef(null);

  // useEffect runs once when the component loads
  useEffect(() => {
    // Fetch the ticket data from our PHP backend
    fetch('http://localhost/ticket-api/generate-ticket.php?ticket_id=2')
      .then(response => response.json())
      .then(data => {
        setTicketData(data); // Save the fetched data into state
      })
      .catch(error => {
        console.error("There was an error fetching the ticket data:", error);
      });
  }, []); // The empty array [] means this effect runs only once.


  // This function now handles the full download process
  const handleDownload = async () => {
    if (!ticketRef.current) {
      alert("Ticket component is not ready yet.");
      return;
    }

    try {
      // 1. Convert the React ticket component to a PNG image
      const dataUrl = await toPng(ticketRef.current);

      // 2. Create a simple HTML structure with the image embedded
      const htmlToSend = `
        <html>
          <head>
            <style> body { margin: 0; } </style>
          </head>
          <body>
            <img src="${dataUrl}" style="width: 100%; height: auto;" />
          </body>
        </html>
      `;

      // 3. Send this HTML to the PHP backend using a POST request
      const response = await fetch('http://localhost/ticket-api/generate-ticket.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html',
        },
        body: htmlToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // 4. Handle the response, which is the PDF file
      const blob = await response.blob(); // Get the PDF as a Blob
      const url = window.URL.createObjectURL(blob); // Create a temporary URL for it
      const a = document.createElement('a'); // Create a temporary link element
      a.href = url;
      a.download = 'my-e-ticket.pdf'; // Set the download filename
      document.body.appendChild(a);
      a.click(); // Programmatically click the link to trigger the download
      a.remove(); // Clean up by removing the link
      window.URL.revokeObjectURL(url); // Free up memory

    } catch (error) {
      console.error('Oops, something went wrong!', error);
      alert('Failed to download the ticket. Please check the console for errors.');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">E-Ticket Generator Practice</h1>

      {/* Conditionally render the ticket or a loading message */}
      {!ticketData ? (
        <p>Loading ticket data...</p>
      ) : (
        <ETicket ref={ticketRef} ticketData={ticketData} />
      )}

      <button
        onClick={handleDownload}
        disabled={!ticketData} // Disable button until data is loaded
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg disabled:bg-gray-400"
      >
        Download Ticket
      </button>
    </div>
  );
}

export default App;