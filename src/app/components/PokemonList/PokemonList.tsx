'use client';

import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../types/pokemon';
import PokemonCard from '../PokemonCard';

function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('/api/pokemons');
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error('error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-xl font-semibold">
                도감 내용을 불러오고 있습니다...
            </div>
        );
    }

    return (
        <div className="p-4 min-h-screen">
            <h1 className="text-4xl font-extrabold my-12 text-center text-yellow-700">Pokémon List</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-screen-xl mx-auto">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
