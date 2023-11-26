
function download(path){
    return new Promise((resolve, reject) => {
        console.log('File started to download');
        setTimeout(() => {
            let file = path.split('/').pop();
            if(file) resolve(file);
            else reject('something went wrong!');
        }, 3000);
    })
}

function upload(file){
    return new Promise((resolve, reject) => {
        console.log('file started to upload');
        setTimeout(()=>{
            let url = 'https://facebook/cloud.com/' + file;
            resolve(url)
        }, 2000)
    })
}

function compress(file){
    return new Promise((resolve, reject) => {
        console.log(file, 'started to compress');
        setTimeout(() => {
            let compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

let url = 'http://facebook.com/profile.jpg';
// download(url)
//     .then(compress)
//     .then(upload)
//     .then((path)=>{
//         console.log(path);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// ------------------- async -await 
async function main(){
   try {
        const file = await download(url);
        console.log('file downloaded successfully', file);

        const compressedFile = await compress(file);
        console.log('file compressed successfully', compressedFile);

        const finalPath = await upload(compressedFile);
        console.log('file uploaded successfully to', finalPath)
        
   } catch (error) {
        console.log(error);
   }
}

main();