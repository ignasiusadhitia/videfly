import { Features, LiveDemo, Navbar, Tutorial, ValuePoint } from '@sections';

function App() {
  return (
    <>
      <header className="mb-[100px]">
        <Navbar />
        <LiveDemo />
      </header>
      <main className="grid grid-cols-1 gap-[100px] mb-[61px]">
        <Features />
        <Tutorial />
        <ValuePoint />
      </main>
    </>
  );
}

export default App;
