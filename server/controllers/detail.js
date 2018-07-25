
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const {id} = ctx.request.query
    // const detail = await mysql('detail')
    //     .select('detail.*').where('productId', 1)
    // ctx.state.data = {
    //     //     list: detail.map(v => {
    //     //         return Object.assign({}, v)
    //     //     })
    //     // }
    const detail = await mysql('activity_info')
        .select('activity_info.*').where('id', id)
    ctx.state.data = {
        list: detail.map(v => {
            return Object.assign({}, v)
        })
    }
}
