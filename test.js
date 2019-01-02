const wangBus = require('./Design_Patterns/Observer-Pattern').wangBus

wangBus.on('test', (res)=>{
  console.log(res)
})

wangBus.off('qjwhejk')

wangBus.fire('test', 'zxvczxvzxv');