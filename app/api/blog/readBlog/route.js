import { MongoClient, ObjectId } from "mongodb";

const dbClient = new MongoClient(process.env.URI_String);

export async function POST(req) {
    try {
        let body = await req.json()
        console.log(body)
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
        const find = await clipCollection.findOne({ blogId: body })
        if (find.blogId === body) {
            console.log(find)
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