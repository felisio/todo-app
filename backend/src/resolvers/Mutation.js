

const Mutations = {
  async createTodo(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createTodo({
      data: { 
        ...args 
      }
    }, info)

    return item
  },

  async updateTodo(parent, args, ctx, info) {
    const updates = { ...args };
    // delete ID because we not update the ID
    delete updates.id
    // run the update method
    return await ctx.db.mutation.updateTodo({
      data: updates,
      where: {
        id: args.id,
      },
    }, info)
  },

  async deleteTodo(parent, args, ctx, info) {
    const where = { id: args.id }
    // find the item
    const item = await ctx.db.query.todo({ where }, `{ id description done }`)
    // delete it 
    return await ctx.db.mutation.deleteTodo({ where }, info)
  },

};

module.exports = Mutations;