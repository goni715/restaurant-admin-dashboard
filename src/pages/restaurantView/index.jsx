import React from 'react';
import { useParams } from 'react-router-dom';

const restaurants = [
    {
      id: '#1234',
      owner: 'Mike',
      name: 'Pizza Hut',
      address: 'Broken Shaker',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1235',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1236',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1237',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1238',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1239',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1240',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#2233',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1033',
      owner: 'Mike',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1133',
      owner: 'Mike',
      name: 'The  Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1333',
      owner: 'Jhon',
      name: 'The Dead Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: '#1433',
      owner: 'David',
      name: 'The  Rabbit',
      address: 'Hamilton St',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7ed48e7e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];


const RestaurantView = () => {
  const { id } = useParams();

  const restaurant = restaurants.find((r) => r.id === id);

  console.log(id)


 
 

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg p-6 rounded-lg">
        <img src={restaurant.image} alt="Restaurant" className="w-full h-64 object-cover rounded-lg" />

        <h2 className="text-2xl font-bold mt-4">{restaurant.name}</h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-semibold">{id}</p>
            <input type="text" className="border p-2 w-full" value={restaurant.website} readOnly />
          </div>
          <div>
            <p className="font-semibold">Ratings</p>
            <p className="text-yellow-500 text-lg">⭐ {restaurant.rating}</p>
          </div>
          <div>
            <p className="font-semibold">Hourly Service</p>
            <input type="text" className="border p-2 w-full" value={restaurant.hourlyService} readOnly />
          </div>
          <div>
            <p className="font-semibold">Cuisine Type</p>
            <input type="text" className="border p-2 w-full" value={restaurant.cuisine} readOnly />
          </div>
          <div>
            <p className="font-semibold">Cancellation Charged</p>
            <input type="text" className="border p-2 w-full" value={restaurant.cancellationCharged} readOnly />
          </div>
          <div>
            <p className="font-semibold">Party Size</p>
            <input type="text" className="border p-2 w-full" value={restaurant.partySize} readOnly />
          </div>
          <div>
            <p className="font-semibold">Indoor Tables</p>
            <input type="text" className="border p-2 w-full" value={restaurant.indoorTables} readOnly />
          </div>
          <div>
            <p className="font-semibold">Outdoor Tables</p>
            <input type="text" className="border p-2 w-full" value={restaurant.outdoorTables} readOnly />
          </div>
          <div>
            <p className="font-semibold">Menu</p>
            <input type="text" className="border p-2 w-full" value={restaurant.menu} readOnly />
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" checked readOnly />
            <span>Business Day</span>
          </div>
          <div>
            <p className="font-semibold">Open Time</p>
            <input type="text" className="border p-2 w-20" value={restaurant.openTime} readOnly />
          </div>
          <div>
            <p className="font-semibold">Close Time</p>
            <input type="text" className="border p-2 w-20" value={restaurant.closeTime} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantView;
