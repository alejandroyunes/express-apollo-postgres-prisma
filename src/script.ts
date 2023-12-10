import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'jesus@waltmart.com',
      username: 'jesus',
    }
  })
  console.log(user)

  const post = await prisma.post.create({
    data: {
      title: 'post jesus',
      content: 'some content',
      authorId: user.id,
    }
  })
  console.log(post)
}

main().catch(e => console.error(e)).finally(async () => await prisma.$disconnect())

/* exec": "ts-node ./src/index.ts" */