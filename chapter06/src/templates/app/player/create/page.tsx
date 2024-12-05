import { PlayerCreateForm } from '@/components/playerCreateForm';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Player Create</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 px-6 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <PlayerCreateForm />
        </div>
      </div>
    </div>
  );
}
