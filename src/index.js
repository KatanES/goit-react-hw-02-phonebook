import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// export const theme = {
//   colors: {
//     black: '#212121',
//     white: '#fff',
//     success: 'green',
//     warning: 'orange',
//     error: 'red',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
