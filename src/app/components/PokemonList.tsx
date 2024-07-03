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
        <div className="p-4 bg-black">
            <h1 className="text-2xl font-bold my-5 text-center text-slate-50">Pokémon List</h1>
            <div className="flex flex-wrap justify-center w-[1080px] mx-auto">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
//grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
