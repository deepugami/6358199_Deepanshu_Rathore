import React from 'react';

const ListofPlayers = () => {
    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 92 },
        { name: "KL Rahul", score: 65 },
        { name: "Rishabh Pant", score: 78 },
        { name: "Hardik Pandya", score: 74 },
        { name: "Ravindra Jadeja", score: 68 },
        { name: "Jasprit Bumrah", score: 55 },
        { name: "Yuzvendra Chahal", score: 62 },
        { name: "Mohammed Shami", score: 71 },
        { name: "Shreyas Iyer", score: 83 },
        { name: "Shikhar Dhawan", score: 79 }
    ];

    const playersDisplay = players.map((player, index) => (
        <div key={index} className="player-card">
            <h3>{player.name}</h3>
            <p>Score: {player.score}</p>
        </div>
    ));

    const filteredPlayers = players.filter(player => player.score < 70)
        .map((player, index) => (
            <div key={index} className="player-card filtered">
                <h3>{player.name}</h3>
                <p>Score: {player.score}</p>
            </div>
        ));

    return (
        <div className="list-of-players">
            <h1>List of Cricket Players</h1>
            <div className="all-players">
                <h2>All Players</h2>
                <div className="player-grid">
                    {playersDisplay}
                </div>
            </div>
            <div className="filtered-players">
                <h2>Players with Score Below 70</h2>
                <div className="player-grid">
                    {filteredPlayers}
                </div>
            </div>
        </div>
    );
};

export default ListofPlayers;
