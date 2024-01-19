const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: Array.from({ length: 10000 }, (_, i) => ({
      name: `User ${i}`,
      email: `user${i}@example.com`,
    })),
  });

  // Batch insert for Products
  await prisma.product.createMany({
    data: Array.from({ length: 10000 }, (_, i) => ({
      name: `Product ${i}`,
      quantity: Math.floor(Math.random() * 100),
    })),
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
