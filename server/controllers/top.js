const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const top = await mysql('products')
        .select('id', 'name', 'pic', 'order')
        .orderBy('order', 'desc')
        .limit(3)
    ctx.state.data = {
        list: top
    }
}
