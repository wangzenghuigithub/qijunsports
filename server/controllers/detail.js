
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    // const {id} = ctx.request.query
    const detail = await mysql('detail')
        .select('detail.*').where('productId', 1)
    ctx.state.data = {
        list: detail.map(v => {
            return Object.assign({}, v)
        })
    }
}
