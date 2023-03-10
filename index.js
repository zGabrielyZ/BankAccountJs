const App = require('./App')


App.createUser("gabriel@gmail.com", "Gabriel Ribeiro Siqueira")
App.createUser("lucan@gmail.com", "Lucan Pereira")
App.createUser("pedro@gmail.com", "Pedro Silva")

App.deposit("gabriel@gmail.com", 100)

App.transfer("gabriel@gmail.com", "lucan@gmail.com", 20)

App.changeLoanFee(10)

App.takeLoan("pedro@gmail.com", 2000, 24)

console.log(App.findUser("gabriel@gmail.com"))
console.log(App.findUser("gabriel@gmail.com").account)
console.log(App.findUser("lucan@gmail.com"))
console.log(App.findUser("lucan@gmail.com").account)
console.log(App.findUser("pedro@gmail.com"))
console.log(App.findUser("pedro@gmail.com").account.)

