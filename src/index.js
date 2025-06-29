import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello, I'm Olatunji Ayokanmi</h1>
      <p>Welcome to my Portfolio!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
