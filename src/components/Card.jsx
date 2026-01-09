import { useState } from "react";

function Card({imageUrl, name, cardClick}) {
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease-in',
        border: '1px solid #ccc',
        padding: '1em',
        cursor: 'pointer'
    };


    return (
            <div style={style} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={cardClick}>
            <img src={imageUrl} alt={name}/>
            <p>{name}</p>
            
        </div>
    );
}

export default Card;