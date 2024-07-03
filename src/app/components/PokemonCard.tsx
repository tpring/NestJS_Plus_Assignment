'use client';

import Link from 'next/link';
import { Pokemon } from '../types/pokemon';

type PokemonCardProps = {
    pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="border rounded-lg p-2 text-center">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mx-auto" />
            <h2 className="text-xl font-semibold">{pokemon.korean_name || pokemon.name}</h2>
            <Link href={`/pokemons/${pokemon.id}`} className="text-blue-500">
                자세히 보기
            </Link>
        </div>
    );
};

export default PokemonCard;
