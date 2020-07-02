// const api = jQuery('.test') // 不返回元素们，返回api对象
// // api.addClass('red') // 遍历所有刚才获取的元素，添加.red；addClass{return null}
// api.addClass('red').addClass('blue') // 链式操作；addClass{return api}

jQuery('.test1')
  .parent()
  .print()