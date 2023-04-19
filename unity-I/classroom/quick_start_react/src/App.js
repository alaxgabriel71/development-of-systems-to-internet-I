import Products from "./components/Products";

function MyButton() {
  const text = "Variable here"
  const width = "80vw"
  return (
    <button style={{width: width}}>
      {text}
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Products />
    </div>
  );
}
