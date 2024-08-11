import dotenv from 'dotenv'
dotenv.config();
import { MongoClient, ObjectId } from "mongodb";
const dbClient = new MongoClient(process.env.URI_String);

export async function POST(req) {
    try {
        // Request Data
        const body = await req.json()


        // Access Data Base
        await dbClient.connect()
        const dataBase = dbClient.db(process.env.DataBase)
        const collection = dataBase.collection('ClipBoard')
        let objectId = new ObjectId(`${body.id}`)
        const find = await collection.findOne({ _id: objectId })

        if (find) {
            await collection.updateOne({ _id: objectId }, { $set: { 'blogId': body.blogId } })
        } else {
            await collection.insertOne({
                _id: objectId,
                'blogId': body.blogId
            })
        }


        // Response
        return new Response(JSON.stringify({ msg: 'Document Found and updated' }), {
            status: 200,
            headers: { 'COntent-Type': 'application/json' }
        })
    }

    catch (err) {
        console.log('Internel Server Problem', err)
        return new Response(JSON.stringify({ msg: 'Internel Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }

}