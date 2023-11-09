// Singleton

/*
The idea of this pattern is actually very simple: there is some 
kind of Class in an application, for example, and in the application 
there can be only one instance of this Class. 
A real example of Singleton can be, for example, 
working with databases. And you’ve probably heard about such an orm as 
Mongoose, which allows us to very coolly connect to Mongo,
and they actually use a pattern Singleton, that is, in order, for example, 
to avoid unnecessary connections to the database, and that is, 
they use one single object and if already let's say the connections 
are made, then we are already using the existing connections.
This pattern is a lot, at least in databases.
*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData()) // MongoDB

const mysql = new Database('MySQL')
console.log(mysql.getData()) // MongoDB

