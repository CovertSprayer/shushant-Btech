
function download(path, callback){
    console.log('File started to download');
    setTimeout(() => {
        let file = path.split('/').pop();
        callback(file);
    }, 3000);
}

function upload(file, callback){
    console.log('file started to upload');
    setTimeout(()=>{
        let url = 'https://facebook/cloud.com/' + file;
        callback(url)
    }, 2000)
}

function compress(file, callback){
    console.log(file, 'started to compress');
    setTimeout(() => {
        let compressedFile = file.split('.')[0] + '.zip';
        callback(compressedFile);
    }, 2000);
}

let url = 'http://facebook.com/profile.jpg'
download(url, function(downloadedFile){
    console.log(downloadedFile, 'donwloaded successfully');
    compress(downloadedFile, function(compressedFile){
        console.log(downloadedFile, 'successfully compressed to ', compressedFile);
        upload(compressedFile, function(finalPath){
            console.log('file successfully uploaded to ', finalPath)
        })
    })
})