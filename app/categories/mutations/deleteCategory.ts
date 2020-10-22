import { Ctx } from "blitz"
import db, { CategoryDeleteArgs } from "db"

type DeleteCategoryInput = Pick<CategoryDeleteArgs, "where">

export default async function deleteCategory({ where }: DeleteCategoryInput, ctx: Ctx) {
  ctx.session.authorize()

  const category = await db.category.delete({ where })

  return category
}
