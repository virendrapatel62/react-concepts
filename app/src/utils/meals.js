import faker from "faker";
function generateMealData(count) {
  return new Array(count).fill().map((_, index) => {
    return {
      id: index + 100,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: +faker.commerce.price(20, 200, 0),
      image: `https://source.unsplash.com/500x500?food,${index}`,
    };
  });
}

export { generateMealData };
