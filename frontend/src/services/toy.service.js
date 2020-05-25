'use strict'

import httpService from './http.service.js';


export default {
    query,
    getById,
    remove,
    edit,
    add,
    uploadImg
}


const BASE_URL = (process.env.NODE_ENV !== 'development')
 ? '/toy'
 : 'toy';


 

function query(){        
    return httpService.ajax(`${BASE_URL}`)
}

function getById(id){    
    return httpService.ajax(`${BASE_URL}/${id}`)
}


function remove(id){    
    return httpService.ajax(`${BASE_URL}/${id}`,'delete')
}

function edit(toy){
    return httpService.ajax(`${BASE_URL}/${toy.id}`,'put',toy)
}


function add(toy){
    return httpService.ajax(`${BASE_URL}`,'post',toy)
}



function uploadImg(ev) {
    console.log('????')
    const CLOUD_NAME = 'dybecdnkl'
    const PRESET_NAME = 'ofn3bcwa'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', PRESET_NAME);

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err =>{ 
            console.error(err)})
}