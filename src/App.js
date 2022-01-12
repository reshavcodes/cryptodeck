import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Home,
  News,
  CryptoDetails,
  Cryptocurrencies,
  Error,
  About,
} from "./components";
import "./App.css";



const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>

              {/* Route 1 */}
              <Route exact path="/" element={<Home />} />

              {/* Route 2 */}
              <Route exact path="/exchanges" element={<Exchanges />} />

              {/* Route 3 */}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />

              {/* Route 4 */}
              <Route
                exact
                path="/crypto/:cryptoId"
                element={<CryptoDetails />}
              />

              {/* Route 5 */}
              <Route exact path="/news" element={<News />} />


              <Route exact path="/about" element={<About />} />

              <Route exact path="/*" element={<Error />} />

              


            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoDeck <br />
            Made with &hearts; by <Link to="/">Rishav</Link>
          </Typography.Title>
          <div className="contact-details">
            <a
              href="https://instagram.com/ayedubey"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://wa.me/+917991146699?text=Hello"
              rel="noreferrer"
            >
              <i class="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/reshavcodes"
              rel="noreferrer"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a target="_blank" href="https://reshavcodes.me" rel="noreferrer">
              <i class="fas fa-globe-americas fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
