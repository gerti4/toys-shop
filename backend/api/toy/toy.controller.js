const toyService = require ('./toy.service');



async function getToys(req,res){
    const toys = await toyService.query();
    res.send(toys)
}


async function getToy(req,res){    
    const toy = await toyService.getById(req.params.id)    
    res.send(toy);
}

async function removeToy(req,res){
    await toyService.remove(req.params.id);
    res.end();   
}

async function updateToy(req,res){
    const toy = await toyService.update(req.body);
    res.send(toy);
}

async function addToy(req,res){    
    const toy = await toyService.add(req.body);
    res.send(toy);
}



module.exports = {
    getToys,
    getToy,
    removeToy,
    updateToy,
    addToy
}