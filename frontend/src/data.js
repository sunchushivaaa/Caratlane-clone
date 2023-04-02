

export const getRingData = async() => {
 
    try{
        let res = await fetch('https://gold-jittery-chameleon.cyclic.app/ring')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getEarringData = async() => {
 
    try{
        let res = await fetch('https://gold-jittery-chameleon.cyclic.app/earring')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getBraceletData = async() => {
 
    try{
        let res = await fetch('https://gold-jittery-chameleon.cyclic.app/bracelet')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}

export const getMangalsutraData = async() => {
 
    try{
        let res = await fetch('https://gold-jittery-chameleon.cyclic.app/mangalsutra')
        let data = await res.json()
        // console.log(data.Data)
        return data.Data
    }catch(e){
        console.log(e);
    }
  
}