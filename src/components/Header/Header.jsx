import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "../ImgCard/ImgCard";

function Header() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20")
      .then((res) => {
        setData(res.data.coins);
      });
  }, []);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              CryptoCurrency
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link disabled">Home</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={handler}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {data.length > 0 && (
        <div className="grid-container">
          {data
            .filter((crypto) =>
              crypto.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((crypto) => (
              <ImgCard
                name={crypto.name}
                rank={crypto.rank}
                price={crypto.price}
                marketCap={crypto.marketCap}
                key={crypto.id}
                url={crypto.icon}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Header;
