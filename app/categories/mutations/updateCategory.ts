import { Ctx } from "blitz"
import db, { CategoryUpdateArgs } from "db"

type UpdateCategoryInput = Pick<CategoryUpdateArgs, "where" | "data">

export default async function updateCategory({ where, data }: UpdateCategoryInput, ctx: Ctx) {
  ctx.session.authorize()

  const category = await db.category.update({ where, data })

  return category
}
