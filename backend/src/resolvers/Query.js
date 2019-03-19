const { forwardTo } = require('prisma-binding')

const Query = {
  todoes: forwardTo('db'),
}

module.exports = Query;