import { MongoClient } from "mongodb";
const dbClient = new MongoClient(process.env.URI_String);

export async function GET(req) {
    try {
        const cards = [];
        await dbClient.connect()
        const dataBase = dbClient.db(process.env.DataBase)
        const collection = dataBase.collection('Blogs')
        let cursor = collection.find()
        for await (const key of cursor) {
            cards.push(key)
        }
        return new Response(JSON.stringify({ msg: 'Request Recieved', data: cards }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    }
    catch (err) {
        console.log(err)
        return new Response(JSON.stringify({ msg: 'Internel Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }

}