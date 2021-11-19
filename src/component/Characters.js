import React, { useState } from 'react';
import { CharacterList } from '../data/CharacterList';
import { Link } from 'react-router-dom';
import './Characters.css';

function Characters() {
    const [characters, setCharacters] = useState(CharacterList)

    return (
        <section className='character-container'>
            <h1>Characters</h1>
            <div className='underline'></div>
            <section className='icons-container'>
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className='card-character'>
                                <Link to={character.name}>
                                    <h2>{character.name}</h2>
                                    <img src={character.imageURL} alt=''/>
                                </Link>
                                {/* <Link to={`/character/${character.name}`}></Link> */}
                            </div>
                        )
                    })}
            </section>
        </section>
    )
}

export default Characters;
