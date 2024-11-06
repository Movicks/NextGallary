
import Imagegallery from './components/Imagegallery/Imagegallery';




export default function Home() {
  

  return (
    
      <div className="grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen pb-10 gap-5 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <Imagegallery />
        </main>
      </div>
  );
}
