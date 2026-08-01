let url = "https://official-joke-api.appspot.com/random_joke";

const data = fetch(url);


// console.log(data);  

// setTimeout(()=> {
//     console.log(data);
// },3000);

data.then(()=> {
    return data.json;
}).then((originaldata)=> {
    console.log(originaldata);
}).catch((error)=> {
    console.lof(error);
})