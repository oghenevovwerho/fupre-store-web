export type Product = {
  name: string;
  image: string;
  amount: number;
  condition: "new" | "used"
};

const makeProducts = (count: number): Product[] => {
  const products: Product[] = []
  for (let index = 1; index <= count; index++) {
    products.push({
      condition: index % 3 == 0 ? "new" : "used",
      name: `Product ${index}`,
      image: `img${index}.avif`,
      amount: index * (1234 * (Number.parseInt(Math.random().toFixed(0)) + 0.25 * 123))
    })
  }
  return products
}

export default makeProducts(32)