// Define a function to fetch documents
async function fetchUser() {
  const response = await fetch("/api/users", {});
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

async function fetchProducts() {
  const response = await fetch("/api/products", {});
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export { fetchProducts, fetchUser };
