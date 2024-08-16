import { MongoClient, ObjectId } from "mongodb";

const dbClient = new MongoClient(process.env.URI_String);

export async function GET(req) {
    try {
        console.log('Request Recieved by ReadBlog route')
        await dbClient.connect();
        const cards = [];
        const dataBase = dbClient.db(process.env.DataBase)
        const collection = dataBase.collection('Blogs')
        let cursor = collection.find()
        for await (const key of cursor) {
            cards.push(key)
        }
        const clipCollection = dataBase.collection('ClipBoard')
        const find = await clipCollection.findOne({ _id: new ObjectId(`66b89aac7b1ffd2e989657ad`) })
        let resData = cards.find(card => card.id === find.blogId)
        return new Response(JSON.stringify({ msg: 'Request Recieved', data: resData, blogId: `BlogID from readBlog route: ${find.blogId}` }), {
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