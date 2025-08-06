// src/ETicket.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // We use this to generate a real QR code

const ETicket = React.forwardRef(({ ticketData }, ref) => {
  // If ticketData is not available yet, show a loading state or nothing
  if (!ticketData) {
    return null;
  }

  return (
    <div ref={ref} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 m-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-dashed pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{ticketData.eventTitle}</h1>
          <p className="text-sm text-gray-500">{ticketData.eventDate}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Order #{ticketData.orderId}</p>
        </div>
      </div>

      {/* Body */}
      <div className="py-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">TICKET HOLDER</p>
            <p className="text-lg font-semibold text-gray-800">{ticketData.ticketHolderName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">TICKET TYPE</p>
            <p className="text-lg font-semibold text-gray-800">{ticketData.ticketType}</p>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
         <QRCodeSVG value={ticketData.qrIdentifier} />
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Present this ticket at the entrance for scanning.</p>
      </div>
    </div>
  );
});

export default ETicket;