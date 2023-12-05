import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      price: 799.99,
      image: "https://example.com/iphone13.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 899.99,
      image: "https://example.com/galaxys21.jpg",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: 699.99,
      image: "https://example.com/pixel6.jpg",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      price: 899.99,
      image: "https://example.com/oneplus9pro.jpg",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      price: 649.99,
      image: "https://example.com/mi11.jpg",
    },
  ];

  setTimeout(() => {
    if (req.query.search) {
      const filteredProducts = products.filter((product) =>
        product.name.includes(req.query.search)
      );
      res.json(filteredProducts);
      return;
    }
    res.json(products);
  }, 3000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
