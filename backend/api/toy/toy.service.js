const dbService = require ('../../services/db.service.js');
const ObjectId = require ('mongodb').ObjectId




module.exports = {
    query,
    getById,
    remove,
    add,
    update,
} 






async function query(filterBy = {}) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = {$gte : filterBy.minBalance}
    }
    
    const collection = await dbService.getCollection('toy');
    
    try{
        const toys = await collection.find(criteria).toArray();
        
        return toys;
    }  catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}


async function getById(toyId){
    const collection = await dbService.getCollection('toy');    
    try {
        const toy = await collection.findOne({"_id" : ObjectId(toyId)});        
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot find toy ${toyId}`)
        throw err;
    }
}



async function remove(toyId){
    const collection = await dbService.getCollection('toy');
    try{
        return await collection.deleteOne({"_id":ObjectId(toyId)});
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
}


async function update(toy){    
   const collection = await dbService.getCollection('toy');
   try{
       toy._id = ObjectId(toy._id)
       await collection.updateOne({"_id":ObjectId(toy._id)}, {$set : toy});       
       return toy;
   } catch (err) {
    console.log(`ERROR: cannot update toy ${toy._id}`)
    throw err;
}
}

async function add(toy) {
    console.log(toy);
    
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}





