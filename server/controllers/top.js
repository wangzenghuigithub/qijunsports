const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const top = await mysql('activity_info')
        .select('id', 'title', 'pic_top', 'order')
        .orderBy('order', 'desc')
        .limit(3)
    ctx.state.data = {
        list: top
    }
}
