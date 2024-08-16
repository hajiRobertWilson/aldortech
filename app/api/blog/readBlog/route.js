import { MongoClient, ObjectId } from "mongodb";

const dbClient = new MongoClient(process.env.URI_String);

export async function POST(req) {
    try {
        let body = await req.json()

        await dbClient.connect();
        const dataBase = dbClient.db(process.env.DataBase)
        const collection = dataBase.collection('Blogs')
        let cards =await collection.find().toArray()

        const clipCollection = dataBase.collection('ClipBoard')
        const find = await clipCollection.findOne()
        if (find && find.blogId) {
            let resData = cards.find(card => card.id === find.blogId)
            return new Response(JSON.stringify({ msg: 'Request Recieved', data: resData, blogId: `BlogID from readBlog route: ${body}` }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            })
        }
        return new Response(JSON.stringify({ msg: 'Request Not valid', blogId: `BlogID from readBlog route: ${body}` }), {
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