import { MongoClient } from "mongodb";
const dbClient = new MongoClient(process.env.URI_String);

export async function GET(req) {
    try {
        await dbClient.connect()
        const dataBase = dbClient.db(process.env.DataBase)
        const collection = dataBase.collection('Blogs')
        let cards = await collection.find().toArray();

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