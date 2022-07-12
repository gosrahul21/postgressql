import React from 'react';
import ReactDom from 'react-dom/client'
import Fetch from './client/pages/Fetch';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    {/* <InputFile/> */}
    <Fetch/>
  </React.StrictMode>
);
