'use client';

import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../types/pokemon';
import PokemonCard from '../PokemonCard';

function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('/api/pokemons');
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error('Failed to fetch pokemons:', error);
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
