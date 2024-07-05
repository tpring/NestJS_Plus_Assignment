'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '../../types/pokemon';

type PokemonCardProps = {
    pokemon: Pokemon;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="relative border border-gray-800 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-105">
            <Link href={`/pokemons/${pokemon.id}`}>
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    No.{pokemon.id}
                </div>
                <div className="flex justify-center p-4">
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={128}
                        height={128}
                        className=" group-hover:scale-110"
                    />
                </div>
                <h2 className="text-xl font-bold text-center text-red-700 bg-yellow-100 px-4 py-2 rounded-b-lg border-t border-gray-200">
                    {pokemon.korean_name}
                </h2>
            </Link>
        </div>
    );
};

export default PokemonCard;
