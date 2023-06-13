import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import BillPDF from './BillPDF';

const Cart = () => {
  return (
    <div>
      {/* Your cart items UI */}
      {/* ... */}

      <PDFViewer width="100%" height={800}>
        <BillPDF />
      </PDFViewer>
    </div>
  );
};

export default Cart;
