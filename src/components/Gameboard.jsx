import { useEffect, useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";

function Gameboard() {
    const [cards, setCards] = useState([
        {id: 101, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png', text: 'Sceptile'},
        {id: 102, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', text: 'Charizard'},
        {id: 103, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png', text: 'Machoke'},
        {id: 104, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png', text: 'Shuckle'},
        {id: 105, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png', text: 'Fearow'},
        {id: 106, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png', text: 'Ariados'},
        {id: 107, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png', text: 'Golbat'},
        {id: 108, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png', text: 'Nosepass'},
        {id: 109, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png', text: 'Lotad'},
        {id: 110, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png', text: 'Arcanine'},
        {id: 111, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png', text: 'Delcatty'},
        {id: 112, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png', text: 'Lanturn'},
    ]);
    const [clickedIds, setClickedIds] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const shuffleCards = (array) => {
        const shuffleArray = [...cards];
        for (let i = shuffleArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
        }
        return shuffleArray;
    };

    const handleCardClick = (id) => {
        if(clickedIds.includes(id)) {
            console.log("Game Over!");
            setScore(0);
            setClickedIds([]);
        } else {
            const newScore = score + 1;
            setScore(newScore);
            setClickedIds([...clickedIds, id]);
        
        if(newScore > bestScore) {
            setBestScore(newScore);
        }
    }
        setCards(shuffleCards(cards));
    }


    return (
        <div className="gameWrapper">
            <Scoreboard score={score} bestScore={bestScore} />
            <div className="boardGrid">
            {cards.map((item) => (
                <Card 
                    key={item.id}
                    imageUrl={item.url}
                    name={item.text}
                    cardClick={() => handleCardClick(item.id)}
                />
            ))}
        </div>
        </div>
    );

}

export default Gameboard;