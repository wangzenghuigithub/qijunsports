
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const {page} = ctx.request.query
    const size = 5
    const mysqlSelect = mysql('activity_info')
        .select('activity_info.*')
        .orderBy('activity_info.order', 'asc')
    let products
    // if (openid) {
    // // 根据opid过滤
    //     products = await mysqlSelect.where('products.openid', openid)
    // } else {
    products = await mysqlSelect.limit(size).offset(Number(page) * size)
    // }
    // .orderBy('id','desc')
    ctx.state.data = {
        list: products
    }
}
