import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Missing() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/missing").then(res => setList(res.data));
  }, []);

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">🔍 Missing Persons</h1>

      <div className="grid md:grid-cols-3 gap-6">

        {list.map(p => (
          <div key={p._id} className="bg-white shadow rounded-2xl overflow-hidden">

            <img
              src={p.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">
                {p.age} yrs • {p.gender}
              </p>
              <p className="text-xs text-red-600">
                Last seen: {p.lastSeenLocation}
              </p>
              <p className="text-sm">{p.description}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
