import { Pokemon } from '@/app/types/pokemon';
import Link from 'next/link';

interface PokemonDetailProps {
    pokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center">{pokemon.korean_name}</h1>
                <div className="flex justify-center my-4">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-40 h-40" />
                </div>
                <div className="text-center">
                    <p>키: {pokemon.height} m</p>
                    <p>무게: {pokemon.weight} kg</p>
                </div>
                <h2 className="text-xl font-semibold mt-4">타입</h2>
                <ul className="list-disc list-inside">
                    {pokemon.types.map((type) => (
                        <li key={type.type.name}>{type.type.korean_name}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mt-4">특성</h2>
                <ul className="list-disc list-inside">
                    {pokemon.abilities.map((ability) => (
                        <li key={ability.ability.name}>{ability.ability.korean_name}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mt-4">기술</h2>
                <ul className="list-disc list-inside overflow-y-scroll h-48">
                    {pokemon.moves.map((move) => (
                        <li key={move.move.name}>{move.move.korean_name}</li>
                    ))}
                </ul>
                <div className="flex justify-center mt-6">
                    <Link href="/" className="text-blue-500 hover:underline">
                        뒤로 가기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
