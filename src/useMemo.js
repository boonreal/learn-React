import { useState, useMemo } from "react";

// memo => tránh component re-render k cần thiết
// useMemo(cb, [deps]) => tránh thực hiện lại logic nào đó k cần thiết

function Content() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('')
    setPrice('')
  };
// useMemo(cb, [deps])
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("re-conculate;....");
      return result + prod.price;
    }, 0)
    return result
  }, [products]);

  return (
    <div>
      <input
        value={name}
        placeholder="Enter name:..."
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        value={price}
        placeholder="Enter price:..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      <div>Total: {total}</div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
