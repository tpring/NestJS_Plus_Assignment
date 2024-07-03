import PokemonList from './components/PokemonList';

export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">포켓몬 도감</h1>
            <PokemonList />
        </div>
    );
}
