let a=new Set()
let b=new Map()
let c={a:2,b:3}
a.add(c)
b.set('a','b')
console.log(a.has(c),'---',b.get('a'))