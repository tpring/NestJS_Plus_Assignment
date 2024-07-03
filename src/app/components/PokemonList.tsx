'use client';

import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import PokemonCard from './PokemonCard';

function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch('/api/pokemons');
            const data = await response.json();
            setPokemons(data);
        };

        fetchPokemons();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Pokémon List</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
