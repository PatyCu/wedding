import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
    return(
        <p>React Component for our wedding registry</p>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);