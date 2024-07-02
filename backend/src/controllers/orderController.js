const prisma = require("../../prismaClient");

exports.createOrder = async (req, res) => {
  const { tableNumber, totalAmount, items } = req.body;
  const userId = req.user.id;

  try {
    const order = await prisma.order.create({
      data: {
        tableNumber,
        userId,
        totalAmount,
        orderItems: {
          create: items.map((item) => ({
            quantity: item.quantity,
            menuItem: {
              connect: { id: item.menuItemId },
            },
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCurrentOrder = async (req, res) => {
  const userId = req.user.id;

  try {
    const currentOrder = await prisma.order.findFirst({
      where: { userId, status: "PENDING" },
      include: {
        orderItems: {
          include: { menuItem: true },
        },
      },
    });
    res.json(currentOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderHistory = async (req, res) => {
  const userId = req.user.id;

  try {
    const orderHistory = await prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        orderItems: {
          include: { menuItem: true },
        },
      },
    });

    res.json(orderHistory);
  } catch (error) {
    res.status500().json({ message: error.message });
  }
};

exports.getIncomingOrders = async (req, res) => {
  try {
    const incomingOrders = await prisma.order.findMany({
      where: { status: "PENDING" },
      include: {
        orderItems: { include: { menuItem: true } },
      },
    });

    res.json(incomingOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completeOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedOrder = await prisma.order.update({
      where: { id: Number(id) },
      data: {
        status: "COMPLETED",
      },
    });
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
