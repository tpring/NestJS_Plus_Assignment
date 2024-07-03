'use client';

import Link from 'next/link';
import { Pokemon } from '../types/pokemon';

type PokemonCardProps = {
    pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="w-40 mr-5 mt-5 border rounded-lg p-2 text-center hover:bg-white group transition-transform duration-200 hover:scale-105">
            <Link href={`/pokemons/${pokemon.id}`}>
                <div className="w-[40px] border-[1px] border-gray-500 rounded-full text-slate-50 group-hover:text-black">
                    {pokemon.id}
                </div>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-24 h-24 mx-auto transform group-hover:scale-110 transition-transform duration-200"
                />
                <h2 className="text-xl font-semibold text-slate-50 group-hover:text-black">{pokemon.korean_name}</h2>
            </Link>
        </div>
    );
};

export default PokemonCard;
