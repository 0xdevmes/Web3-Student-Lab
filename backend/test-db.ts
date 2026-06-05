import 'dotenv/config';
import prisma from './src/db/index.ts';

async function main() {
  try {
    const student = await prisma.student.findFirst();
    console.log("Success", student);
  } catch (e) {
    console.error("DB ERROR:", e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
