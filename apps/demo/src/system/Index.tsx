import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);
