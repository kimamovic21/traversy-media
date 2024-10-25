import rooms from '@/data/rooms.json';
import RoomCard from '@/components/RoomCard';

export default function Home() {
  return (
    <>
      <h1>Bookit App</h1>
      {rooms.length > 0 ? (
        rooms.map((room) => 
          <RoomCard 
            key={room?.$id}
            room={room} 
          />
        )
      ) : (
        <p>No rooms available at the moment...</p>
      )}
    </>
  );
};