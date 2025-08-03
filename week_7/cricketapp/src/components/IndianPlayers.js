import React from 'react';

const IndianPlayers = () => {
    const allPlayers = [
        "Virat Kohli", 
        "Rohit Sharma", 
        "KL Rahul", 
        "Rishabh Pant", 
        "Hardik Pandya", 
        "Ravindra Jadeja", 
        "Jasprit Bumrah", 
        "Yuzvendra Chahal", 
        "Mohammed Shami", 
        "Shreyas Iyer", 
        "Shikhar Dhawan"
    ];

    const [player1, , player3, , player5, , player7, , player9, , player11] = allPlayers;
    const [, player2, , player4, , player6, , player8, , player10] = allPlayers;

    const oddTeam = [player1, player3, player5, player7, player9, player11];
    const evenTeam = [player2, player4, player6, player8, player10];

    const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Rishabh Pant", "Hardik Pandya"];
    const RanjiTrophyPlayers = ["Mayank Agarwal", "Prithvi Shaw", "Abhimanyu Easwaran", "Sarfaraz Khan", "Ruturaj Gaikwad"];

    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div className="indian-players">
            <h1>Indian Cricket Players</h1>
            
            <div className="teams-section">
                <div className="odd-team">
                    <h2>Odd Team Players</h2>
                    <ul>
                        {oddTeam.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="even-team">
                    <h2>Even Team Players</h2>
                    <ul>
                        {evenTeam.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="merged-players">
                <h2>Merged T20 and Ranji Trophy Players</h2>
                <div className="player-lists">
                    <div className="t20-players">
                        <h3>T20 Players</h3>
                        <ul>
                            {T20players.map((player, index) => (
                                <li key={index}>{player}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="ranji-players">
                        <h3>Ranji Trophy Players</h3>
                        <ul>
                            {RanjiTrophyPlayers.map((player, index) => (
                                <li key={index}>{player}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="merged-list">
                        <h3>Merged Player List</h3>
                        <ul>
                            {mergedPlayers.map((player, index) => (
                                <li key={index}>{player}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndianPlayers;
