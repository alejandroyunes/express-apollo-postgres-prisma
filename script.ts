import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'peter@waltmart.com',
      username: 'peter',
    }
  })
  console.log(user)
}


main().catch(e => console.error(e)).finally(async () => await prisma.$disconnect())