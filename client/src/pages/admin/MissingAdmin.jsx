import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function MissingAdmin() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);

  const fetch = async () => {
    const res = await api.get("/missing");
    setList(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  /* CREATE */
  const add = async () => {
    const fd = new FormData();

    Object.keys(form).forEach(k => fd.append(k, form[k]));
    if (file) fd.append("image", file);

    await api.post("/missing", fd);
    setForm({});
    setFile(null);
    fetch();
  };

  /* DELETE */
  const remove = async (id) => {
    await api.delete(`/missing/${id}`);
    fetch();
  };

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">👑 Manage Missing Persons</h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-3">

        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Age" onChange={e=>setForm({...form,age:e.target.value})}/>
        <input placeholder="Gender" onChange={e=>setForm({...form,gender:e.target.value})}/>
        <input placeholder="Last Seen Location" onChange={e=>setForm({...form,lastSeenLocation:e.target.value})}/>
        <textarea placeholder="Description" onChange={e=>setForm({...form,description:e.target.value})}/>
        <input type="file" onChange={e=>setFile(e.target.files[0])}/>

        <button
          onClick={add}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl"
        >
          Add Person
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6">

        {list.map(p => (
          <div key={p._id} className="bg-white shadow rounded-xl p-4">

            <img src={p.image} className="h-40 w-full object-cover rounded"/>

            <h3 className="font-semibold mt-2">{p.name}</h3>

            <button
              onClick={()=>remove(p._id)}
              className="text-red-500 text-sm mt-2"
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
