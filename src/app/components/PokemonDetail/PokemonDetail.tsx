import { Pokemon } from '@/app/types/pokemon';
import Image from 'next/image';
import Link from 'next/link';

interface PokemonDetailProps {
    pokemon: Pokemon;
}

const getBgColorClass = (typeName: string) => {
    switch (typeName) {
        case 'fire':
            return 'bg-red-500';
        case 'water':
            return 'bg-blue-500';
        case 'grass':
            return 'bg-green-500';
        case 'electric':
            return 'bg-yellow-500';
        case 'psychic':
            return 'bg-purple-500';
        case 'bug':
            return 'bg-green-400';
        case 'normal':
            return 'bg-gray-400';
        case 'poison':
            return 'bg-purple-700';
        case 'flying':
            return 'bg-blue-300';
        case 'ground':
            return 'bg-brown-500';
        case 'dragon':
            return 'bg-teal-500';
        default:
            return 'bg-gray-600';
    }
};
const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-6 w-[510px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                <h1 className="text-4xl font-extrabold text-center mb-6 text-yellow-600">{pokemon.korean_name}</h1>
                <div className="flex justify-center mb-6">
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={128}
                        height={128}
                        className="border-4 border-red-400 rounded-lg shadow-lg"
                    />
                </div>
                <div className="text-center mb-6 text-gray-800">
                    <p className="text-xl font-semibold">키: {(pokemon.height / 10).toFixed(1)} m</p>
                    <p className="text-xl font-semibold">무게: {(pokemon.weight / 10).toFixed(1)} kg</p>
                </div>
                <div className="space-y-4 mb-6 px-4">
                    <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-red-500 pb-2">타입</h2>
                    <ul className="flex flex-wrap justify-center">
                        {pokemon.types.map((type) => (
                            <li
                                key={type.type.name}
                                className={`px-4 py-2 rounded-full text-white font-semibold mr-3 ${getBgColorClass(
                                    type.type.name
                                )}`}
                            >
                                <span>{type.type.korean_name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4 mb-6 px-4">
                    <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-red-500 pb-2">특성</h2>
                    <ul className="list-disc list-inside">
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name} className="text-gray-700 text-lg">
                                {ability.ability.korean_name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4 mb-6 px-4">
                    <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-red-500 pb-2">기술</h2>
                    <ul className="list-disc list-inside overflow-y-auto max-h-48 text-gray-700">
                        {pokemon.moves.map((move) => (
                            <li key={move.move.name} className="text-gray-700 text-lg">
                                {move.move.korean_name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 text-lg font-medium py-2 px-4 rounded-lg shadow-md"
                    >
                        뒤로 가기
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
