import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from "./Components/Invoice/Invoice";
import Home from "./Components/Home/Home";
import { useState } from "react";

function App() {
  const [invoices, setInvoices] = useState([]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setInvoices={setInvoices} invoices={invoices} />}
          />
          <Route
            path="invoice/:invoiceId"
            element={<Invoice invoices={invoices} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
