const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const categories = [
  {
    name: "Appetizers",
    imageUrl:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Homemade-Mozzarella-Sticks-9.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1638935116&s=2574b8da89d966ee167111e9822a0b4e",
  },
  {
    name: "Soups",
    imageUrl:
      "https://therecipecritic.com/wp-content/uploads/2019/10/CE584C80-05AB-4560-9C2A-9D9F059EC932.jpeg",
  },
  {
    name: "Salads",
    imageUrl:
      "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg",
  },
  {
    name: "Main Courses",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
  },
  {
    name: "Pizzas",
    imageUrl:
      "https://recipes.timesofindia.com/thumb/56868564.cms?width=1200&height=900",
  },
  {
    name: "Pasta",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7YvSy1QNU8eEeqx9GEk-YEcFGZjtpTYjjA&s",
  },
  {
    name: "Burgers",
    imageUrl:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
  },
  {
    name: "Desserts",
    imageUrl:
      "https://rhubarbandcod.com/wp-content/uploads/2022/02/Chocolate-Lava-Cakes-1.jpg",
  },
  {
    name: "Beverages",
    imageUrl:
      "https://www.goodlifeeats.com/wp-content/uploads/2022/05/Tangerine-Raspberry-Iced-Tea-735x952.jpg",
  },
];

const menuItems = [
  // Appetizers
  {
    name: "Mozzarella Sticks",
    description: "Crispy outside, gooey inside",
    price: 7.99,
    categoryName: "Appetizers",
    imageUrl:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Homemade-Mozzarella-Sticks-9.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1638935116&s=2574b8da89d966ee167111e9822a0b4e",
  },
  {
    name: "Spinach Artichoke Dip",
    description: "Creamy dip with tortilla chips",
    price: 8.99,
    categoryName: "Appetizers",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV_T5FfukRbpgKhsRpFy7Kb1r9JaxBaW5oA&s",
  },
  {
    name: "Chicken Wings",
    description: "Choose from BBQ, Buffalo, or Honey Garlic",
    price: 10.99,
    categoryName: "Appetizers",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Air-Fryer-Chicken-Wings-d2c6fa4.jpg?quality=90&resize=556,505",
  },

  // Soups
  {
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil",
    price: 5.99,
    categoryName: "Soups",
    imageUrl:
      "https://therecipecritic.com/wp-content/uploads/2019/10/CE584C80-05AB-4560-9C2A-9D9F059EC932.jpeg",
  },
  {
    name: "French Onion Soup",
    description: "Rich broth topped with melted cheese",
    price: 6.99,
    categoryName: "Soups",
    imageUrl:
      "https://assets.bonappetit.com/photos/5c634f0d050c433e0a336d6a/1:1/w_2560%2Cc_limit/healthyish-french-onion-horizontal.jpg",
  },

  // Salads
  {
    name: "Caesar Salad",
    description: "Crisp romaine, croutons, and Caesar dressing",
    price: 8.99,
    categoryName: "Salads",
    imageUrl:
      "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg",
  },
  {
    name: "Greek Salad",
    description: "Mixed greens, feta, olives, and vinaigrette",
    price: 9.99,
    categoryName: "Salads",
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg",
  },

  // Main Courses
  {
    name: "Chicken Parmesan",
    description: "Breaded chicken with marinara and mozzarella",
    price: 16.99,
    categoryName: "Main Courses",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/delish-202102-airfryerchickenparm-184-ls-1612561654.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
  {
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato sauce",
    price: 14.99,
    categoryName: "Main Courses",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
  },
  {
    name: "Paneer Tikka Masala",
    description: "Grilled paneer in a spicy tomato sauce",
    price: 12.99,
    categoryName: "Main Courses",
    imageUrl: "https://admin.bagsy.in/storage/34981/paneer-tikka-masala.jpg",
  },
  {
    name: "Lamb Rogan Josh",
    description: "Lamb cooked with aromatic spices",
    price: 16.99,
    categoryName: "Main Courses",
    imageUrl:
      "https://img.taste.com.au/TFQ_zAsZ/taste/2017/06/lamb-rogan-josh-127388-1.jpg",
  },
  {
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fried bread",
    price: 10.99,
    categoryName: "Main Courses",
    imageUrl:
      "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg",
  },
  {
    name: "Biryani",
    description: "Fragrant basmati rice with marinated meat or vegetables",
    price: 13.99,
    categoryName: "Main Courses",
    imageUrl:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani.jpg.webp",
  },

  // Pizzas
  {
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and basil",
    price: 14.99,
    categoryName: "Pizzas",
    imageUrl:
      "https://recipes.timesofindia.com/thumb/56868564.cms?width=1200&height=900",
  },
  {
    name: "Pepperoni Pizza",
    description: "Loaded with pepperoni and cheese",
    price: 15.99,
    categoryName: "Pizzas",
    imageUrl:
      "https://ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043285&width=800",
  },
  {
    name: "Vegetarian Pizza",
    description: "Assorted veggies and cheese",
    price: 16.99,
    categoryName: "Pizzas",
    imageUrl:
      "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-featured-image-3.png",
  },

  // Pasta
  {
    name: "Spaghetti Bolognese",
    description: "Classic meat sauce over spaghetti",
    price: 13.99,
    categoryName: "Pasta",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7YvSy1QNU8eEeqx9GEk-YEcFGZjtpTYjjA&s",
  },
  {
    name: "Fettuccine Alfredo",
    description: "Creamy Parmesan sauce",
    price: 14.99,
    categoryName: "Pasta",
    imageUrl:
      "https://www.southernliving.com/thmb/rh5eWwbkBgA7gXo54f9OnwJka48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fettuccine_Alfredo_006-aa0899e03f394690885e85a3ec4ea3d0.jpg",
  },

  // Burgers
  {
    name: "Classic Cheeseburger",
    description: "Chicken patty with cheese and fixings",
    price: 11.99,
    categoryName: "Burgers",
    imageUrl:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
  },
  {
    name: "Veggie Burger",
    description: "Plant-based patty with avocado",
    price: 12.99,
    categoryName: "Burgers",
    imageUrl:
      "https://www.kitchensanctuary.com/wp-content/uploads/2019/05/Cheesy-Veggie-Burger-Square-1200.jpg",
  },

  // Desserts
  {
    name: "Chocolate Lava Cake",
    description: "Warm cake with gooey chocolate center",
    price: 6.99,
    categoryName: "Desserts",
    imageUrl:
      "https://rhubarbandcod.com/wp-content/uploads/2022/02/Chocolate-Lava-Cakes-1.jpg",
  },
  {
    name: "New York Cheesecake",
    description: "Classic creamy cheesecake",
    price: 7.99,
    categoryName: "Desserts",
    imageUrl:
      "https://biancazapatka.com/wp-content/uploads/2019/06/cheesecake-recipe-vegan-strawberry-raspberry-sauce-720x1080.jpg",
  },

  // Beverages
  {
    name: "Iced Tea",
    description: "Freshly brewed and chilled",
    price: 2.99,
    categoryName: "Beverages",
    imageUrl:
      "https://www.goodlifeeats.com/wp-content/uploads/2022/05/Tangerine-Raspberry-Iced-Tea-735x952.jpg",
  },
  {
    name: "Lemonade",
    description: "Sweet and tart classic",
    price: 2.99,
    categoryName: "Beverages",
    imageUrl:
      "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Lemonade-2-2.jpg?resize=740%2C792&ssl=1",
  },
  {
    name: "Soda",
    description: "Assorted flavors",
    price: 2.49,
    categoryName: "Beverages",
    imageUrl: "https://yummyies.com/wp-content/uploads/2021/04/salt-soda.jpg",
  },
];

async function seedDatabase() {
  console.log("Starting database seeding...");

  for (const category of categories) {
    const existingCategory = await prisma.category.findFirst({
      where: { name: category.name },
    });

    if (!existingCategory) {
      await prisma.category.create({
        data: { name: category.name, imageUrl: category.imageUrl },
      });
      console.log(`Created category: ${category.name}`);
    } else {
      console.log(`Found category: ${category.name}`);
    }
  }

  for (const item of menuItems) {
    const category = await prisma.category.findFirst({
      where: { name: item.categoryName },
    });

    if (!category) {
      console.log(`Category ${item.categoryName} not found`);
      continue;
    }

    const existingMenuItem = await prisma.menuItem.findFirst({
      where: { name: item.name, categoryId: category.id },
    });

    if (!existingMenuItem) {
      await prisma.menuItem.create({
        data: {
          name: item.name,
          description: item.description,
          price: item.price,
          categoryId: category.id,
          imageUrl: item.imageUrl,
        },
      });
      console.log(`Created menu item: ${item.name}`);
    } else {
      console.log(`Found menu item: ${item.name}`);
    }
  }
  console.log("Database seeded successfully!");
}

seedDatabase()
  .catch((e) => {
    console.error("Error seeding database:".e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
