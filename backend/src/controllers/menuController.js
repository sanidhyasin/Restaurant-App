const prisma = require("../../prismaClient");

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await prisma.menuItem.findMany({
      include: { category: true },
    });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch {
    res.status(500).json({ message: error.message });
  }
};
