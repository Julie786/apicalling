export const getCats=async ()=>{
 let request =await fetch(`https://cat-fact.herokuapp.com/facts`,{
     method: 'GET',
    //  body:JSON.stringify({
    //      name:'ali'
    //  })
 })
 return  request
}