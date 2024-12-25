import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";

function App() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("/public/fakedata.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  const searchedData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <h2 className="p-5 text-5xl font-bold text-center">
        My Awesome React App
      </h2>
      <div>
        <div className="container mx-auto text-center">
          <input
            type="text"
            placeholder="Search Here..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 ml-5 md:grid-cols-3">
          {searchedData.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
