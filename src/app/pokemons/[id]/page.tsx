import PokemonDetail from '@/app/components/PokemonDetail';
import { Pokemon } from '@/app/types/pokemon';

interface PokemonPageProps {
    params: { id: string };
}

const fetchPokemon = async (id: string): Promise<Pokemon> => {
    const res = await fetch(`http://localhost:3000/api/pokemons/${id}`);
    const data = await res.json();
    return data;
};

const PokemonPage: React.FC<PokemonPageProps> = async ({ params }) => {
    const { id } = params;
    const pokemon = await fetchPokemon(id);

    return <PokemonDetail pokemon={pokemon} />;
};

export default PokemonPage;
