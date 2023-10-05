import React, { useEffect } from 'react';
import Header from '../partials/Header';

function TermsAndConditions() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        Terms and conditions
      </main>
    </div>
  );
}

export default TermsAndConditions;