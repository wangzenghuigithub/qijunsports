
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const {page} = ctx.request.query
    const size = 5
    const mysqlSelect = mysql('products')
        .select('products.*')
        .orderBy('products.id', 'asc')
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
