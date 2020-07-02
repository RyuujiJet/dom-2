window.$ = window.jQuery = function (selectorOrArray){
  let elements
  if(typeof selectorOrArray === 'string'){
    elements = document.querySelectorAll(selectorOrArray)
  } else if(selectorOrArray instanceof Array){
    elements = selectorOrArray
  }
  // api可以操作elements
  return {
    find(selector){
      let array = []
      for(let i = 0; i < elements.length; i++){
        const elements2 = Array.from(elements[i].querySelectorAll(selector))
        array = array.concat(elements2)
      }
      array.oldApi = this // this就是api
      return jQuery(array)
    },
    each(fn){
      for(let i = 0; i < elements.length; i++){
        fn.call(null, elements[i])
      }
    },
    parent(){
      const array = []
      this.each((node) => {
        if(array.indexOf(node.parentNode) === -1)
          array.push(node.parentNode)
      })
      return jQuery(array)
    },
    children(){
      const array = []
      this.each((node) => {
        array.push(...node.children)
      })
      return jQuery(array)
    },
    print(){
      console.log(elements)
    },
    // 闭包：函数访问外部的变量
    addClass(className){
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.add(className)
      }
      // return api // addClass函数的返回值，返回函数本身，可以再次调用（链式操作）
      // this就是api === jQuery对象 === elements，elements被api操作
      return this // 函数如果被一个对象调用，函数的this就是该对象 api.addClass('red) = api.addClass.call(api, 'red') = api.addClass.call(this, 'red')
    },
    oldApi: selectorOrArray.oldApi,
    end(){
      return this.oldApi
    }
  }
}