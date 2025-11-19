import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./games.css";

export default function Games() {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Match du Samedi",
      typeMatch: "7v7",
      city: "Nice",
      date: "2025-11-25",
      pricePerPlayer: 7,
    },
    {
      id: 2,
      title: "Soirée Foot",
      typeMatch: "5v5",
      city: "Antibes",
      date: "2025-11-26",
      pricePerPlayer: 5,
    },
  ];

  // ⭐ États des filtres
  const [filters, setFilters] = useState({
    typeMatch: "",
    city: "",
    maxPrice: "",
    date: ""
  });

  // ⭐ Fonction pour mettre à jour un filtre
  function handleFilter(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  }

  // ⭐ Appliquer les filtres
  const filteredGames = games.filter((g) => {
    return (
      (filters.typeMatch === "" || g.typeMatch === filters.typeMatch) &&
      (filters.city === "" || g.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.maxPrice === "" || g.pricePerPlayer <= Number(filters.maxPrice)) &&
      (filters.date === "" || g.date === filters.date)
    );
  });

  return (
    <div className="games-page">

      {/* HEADER */}
      <div className="games-header">
        <h1>Available Games</h1>
        <button className="add-btn" onClick={() => navigate("/add")}>
          + Add Game
        </button>
      </div>

      {/* ⭐ ZONE FILTRES */}
      <div className="filters-box">
        <select name="typeMatch" onChange={handleFilter}>
          <option value="">All Types</option>
          <option value="5v5">5v5</option>
          <option value="7v7">7v7</option>
          <option value="9v9">9v9</option>
          <option value="11v11">11v11</option>
        </select>

        <input
          type="text"
          name="city"
          placeholder="Search city..."
          onChange={handleFilter}
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max price (DT)"
          onChange={handleFilter}
        />

        <input
          type="date"
          name="date"
          onChange={handleFilter}
        />
      </div>

      {/* LISTE FILTRÉE */}
      <div className="games-list">
        {filteredGames.map((match) => (
          <div key={match.id} className="game-card">
            <h2>{match.title}</h2>
            <p><strong>Type:</strong> {match.typeMatch}</p>
            <p><strong>City:</strong> {match.city}</p>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>Price:</strong> {match.pricePerPlayer} dinars / player</p>

            <button className="join-btn">Join Game</button>
          </div>
        ))}
      </div>
    </div>
  );
}
