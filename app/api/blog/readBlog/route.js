import { MongoClient, ObjectId } from "mongodb";

const dbCLient = new MongoClient(process.env.URI_String);

export async function GET(req) {
    try {
        await dbCLient.connect();
        const cards = [
            { path: 'poster1.webp', id: 1, title: 'Blog1', value: 'Web' },
            { path: 'poster2.webp', id: 2, title: 'Blog2', value: 'SPAs' },
            { path: 'poster3.webp', id: 3, title: 'Blog3', value: 'Apps' },
            { path: 'poster4.webp', id: 4, title: 'Blog4', value: 'Marketing' },
            { path: 'poster2.webp', id: 5, title: 'Blog5', value: 'Web' },
            { path: 'poster1.webp', id: 6, title: 'Blog6', value: 'Apps' },
            { path: 'poster2.webp', id: 7, title: 'Blog7', value: 'Wordpress' },
            { path: 'poster4.webp', id: 8, title: 'Blog8', value: 'Web' },
            { path: 'poster3.webp', id: 9, title: 'Blog9', value: 'SPAs' },
            { path: 'poster1.webp', id: 10, title: 'Blog10', value: 'Marketing' },
            { path: 'poster4.webp', id: 11, title: 'Blog11', value: 'Wordpress' },
            { path: 'poster2.webp', id: 12, title: 'Blog12', value: 'Wordpress' }
        ];
        const dataBase = dbCLient.db(process.env.DataBase);
        const collection = dataBase.collection('ClipBoard')
        const find = await collection.findOne({ _id: new ObjectId(`66b89aac7b1ffd2e989657ad`) })
        let resData = cards.find(card => card.id === find.blogId)
        return new Response(JSON.stringify({ msg: 'Request Recieved', data: resData }), {
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