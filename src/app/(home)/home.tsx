import Artikel from './components/artikel/artikel';
import Popular from './components/popular/popular';

const HomePage = () => {
  return (
    <main className="w-full grid grid-cols-12 gap-10">
      <Artikel />
      <Popular />
    </main>
  );
};

export default HomePage;
