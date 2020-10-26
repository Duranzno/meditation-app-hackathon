import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstCategoryArgs } from "db"

type GetCategoryInput = Pick<FindFirstCategoryArgs, "where">

export default async function getCategory({ where }: GetCategoryInput, ctx: Ctx) {
  ctx.session.authorize()

  const category = await db.category.findFirst({ where })

  if (!category) throw new NotFoundError()

  return category
}
