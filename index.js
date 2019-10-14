// Mongodb 裡面有一個 MongoClient 可以用

const { MongoClient } = require('mongodb')
const assert = require('assert')

// 好了 載來要試著利用 nodejs 連接資料庫

// PS 關於 mongodb 預設的 port 
const url = 'mongodb://localhost:27017'

const DBName = 'customers'
const client = new MongoClient(url)

// 有必要了解一下 npm assert 是幹嘛的。

// 建立連線試試
client.connect((err) => {
    assert.equal(null,err)
    console.log('connect sucessfully');
    const db = client.db(DBName)
    client.close()
})
// YA! 成功了! 太好了~~