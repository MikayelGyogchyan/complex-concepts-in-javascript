// Dependency inversion principle

// The incorrect way

// class Fetch {
//   request(url) {
//     return Promise.resolve('data from fetch') // return fetch(url).then(r => r.json())
//   }
// }

// class LocalStorage {
//   get() {
//     const dataFromLocalStorage = 'data from local storage' // return localStorage.getItem('key') 
//     return dataFromLocalStorage
//   }
// }

// class Database {
//   constructor() {
//     this.LocalStorage = new LocalStorage
//   }

//   getData() {
//     return this.LocalStorage.get('Is key')
//   }
// }

// const db = new Database()
// console.log(db.getData()) // data from local storage


// The correct way

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('fb.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient())
console.log(db.getData('rand')) // data from local storage


const db2 = new Database(new FetchClient())
console.log(db2.getData('rand')) // Promise { 'data from fetch' }