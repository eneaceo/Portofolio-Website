import React from 'react';

const PrintResume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginLeft: 'auto' }}>
      Print Resume
    </button>
  );
};

export default PrintResume;
