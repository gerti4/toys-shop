const dbService = require ('./db.service');
const ObjectId = require ('mongodb');




module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    // get,
    // save
}

// const fs = require('fs');




async function query(filterBy = {}) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = {$gte : filterBy.minBalance}
    }
    
    const collection = await dbService.getCollection('toy');
    console.log(collection);
    
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
        const toy = await collection.findOne({"_id":ObjectId(toyId)});
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


async function update (toy){
   const collection = await dbService.getCollection('toy');
   try{
       await collection.updateOne({"_id":ObjectId(toy._id)});
       return toy;
   } catch (err) {
    console.log(`ERROR: cannot update toy ${toy._id}`)
    throw err;
}
}

async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}


// var gToys = _createToys();

// function query() {
//     return Promise.resolve(gToys);
// }


// function getById(id) {
//     var toy = gToys.find(currToy => currToy.id === id)
//     console.log(toy);

//     if (toy) return Promise.resolve(toy);
//     return Promise.reject('Unkown bug');
// }


// function get(id) {
//     if (!gToys) {
//         return _createToys()
//             .then(toys => {
//                 gToys = toys;
//                 return _getById(id);
//             })
//     } else {
//         return getById(id);
//     };
//     var toy = gToys.find(toy => toy.id === id);
//     if (toy) return Promise.resolve(toy);
//     else return Promise.reject('something went wrong');
// }

// function remove(id) {
//     var toyIdx = gToys.findIndex(bug =>
//         bug.id === id
//     );
//     if (toyIdx === -1) return Promise.reject('Cannot remove - Not your toy!');
//     gToys.splice(toyIdx, 1);
//     _saveToysToFile();
//     return Promise.resolve();
// }


// function update(toy) {
//     var toyIdx = gToys.findIndex(currToy =>
//         currToy.id === toy.id
//     );
//     if (toyIdx === -1) return Promise.reject('Cannot update - Not your Toy!');
//     gToys.splice(toyIdx, 1, toy);
//     _saveToysToFile();
//     return Promise.resolve(toy);
// }


// function add(toy) {
    //     toy.id = _makeId();
    //     toy.createdAt = Date.now();
    //     gToys.push(toy);
    //     _saveToysToFile();
    //     console.log(toy)
    //     return Promise.resolve(toy);
    // }

// function save(toy) {
//     if (gToys.find(currToy => currToy.id === toy.id)) {
//         var idx = gToys.findIndex(currToy => currToy.id === toy.id);
//         if (idx !== -1) {
//             gToys.splice(idx, 1, toy);
//         }
//     } else {
//         toy.id = _makeId()
//         gToys.unshift(toy);
//     }
//     _saveToysToFile();
//     return Promise.resolve(toy);
// }


// function _saveToysToFile() {
//     fs.writeFileSync('data/toy.json', JSON.stringify(gToys, null, 2));
// }


// function _createToys() {
//     if (gToys && gToys.length) return gToys;
//     gToys = _createToy();
//     _saveToysToFile();
//     return gToys;
// }

// function _createToy() {
//     return [

//         {
//             name: "adipiscin!?!!",
//             price: "500",
//             type: "Adult",
//             inStock: false,
//             rank:5,
//             imgUrl: "https://robohash.org/23"
//         },
//         {
//             name: "aliquam elementum",
//             price: 86,
//             type: "Adult",
//             inStock: false,
//             rank:2,
//             imgUrl: "https://robohash.org/63"
//         },
//         {
//             name: "tortor porttitor",
//             price: 44,
//             type: "Educational",
//             inStock: true,
//             rank:3.5,
//             imgUrl: "https://robohash.org/65"
//         },
//         {
//             name: "placerat ac",
//             price: 72,
//             type: "Funny",
//             inStock: true,
//             rank:3,
//             imgUrl: "https://robohash.org/66"
//         },
//         {
//             name: "adipiscing malesuada",
//             price: 59,
//             type: "Funny",
//             inStock: true,
//             rank:1,
//             imgUrl: "https://robohash.org/67"
//         },
//         {
//             name: "porttitor magna",
//             price: 50,
//             type: "Funny",
//             inStock: false,
//             rank:4.5,
//             imgUrl: "https://robohash.org/68"
//         },
//         {
//             name: "sagittis id",
//             price: 87,
//             type: "Funny",
//             inStock: false,
//             rank:0.5,
//             imgUrl: "https://robohash.org/69"
//         },
//         {
//             name: "mumu",
//             price: 125,
//             type: "Adult",
//             inStock: true,
//             rank:2,
//             imgUrl: "https://robohash.org/70"
//         },
//         {
//             name: "mok",
//             price: 125,
//             type: "Adult",
//             inStock: true,
//             rank:2,
//             imgUrl: "https://robohash.org/71"
//         },
//         {
//             name: "m,fm`",
//             price: 300,
//             type: "Funny",
//             inStock: true,
//             rank:5,
//             imgUrl: "https://robohash.org/72"
//         },
//         {
//             name: "jlk",
//             price: 102,
//             imgUrl: "data:image/jpeg;base64,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",
//             type: "Funny",
//             inStock: true,
//             rank:2.5,
//         },
//         {
//             name: "hkh",
//             price: 12,
//             type: "Adult",
//             inStock: true,
//             rank:1.5,
//             imgUrl: "https://robohash.org/12"
//         }


//     ]
// }


// function _makeId(length = 6) {
//     var txt = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (var i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return txt;
// }

