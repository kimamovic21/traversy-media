import getMyBookings from '../actions/getMyBookings';

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      {bookings.length === 0 ? (
        <p className='text-gray-600 mt-4'>You have no bookings</p>
      ) : (
        bookings.map((booking) => 
          <h3>{booking.room_id.name}</h3>
        )
      )}
    </>
  );
};

export default BookingsPage;