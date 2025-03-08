import Header from "../components/Header";
import Banner from "../components/Banner";
import GameCarousel from "../components/GameCarousel";
import Footer from "../components/Footer";
import { Game } from "../types";
import gamesData from "../data/games.json";

export default function Home() {
  // Use the imported games data
  const carouselGames: Game[] = gamesData;
  const robloxGames: Game[] = gamesData.filter(
    (game) => game.type === "roblox"
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow">
        <Header />
        <Banner />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Popular Games</h2>
          <GameCarousel games={carouselGames} />
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">WꜵNDER Games</h2>
          <GameCarousel games={robloxGames} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
