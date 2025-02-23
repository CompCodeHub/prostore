import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  // Delete all current records
  await prisma.product.deleteMany();

  // Create records from sample data
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully!");
}

main();
