const fs=require('fs');
const express=require("express");
const http=require("http");
const cors=require('cors');
const {spawn}=require("node:child_process");
const ngrok=require("@ngrok/ngrok");

//getting the video downloaded
function getVidId() {
const _=spawn('curl "https://graph.instagram.com/6891097720989215/media?fields=id&access_token=IGQWROVFR4RFVMTGlaTkFTSElFZADc5NTJpdjRnaGhXQUdaNWF5ay1RTV9SUkIwVllna2Vob2s1T2dpWjZAZAclNHNC1hY3Y1VktNMFZAsdFdsamZACQ1Y2dGlaWUtkSFN4YjR3Vl9peFNkTmZAUU2dhaDBPWDM0aHVRbWsZD"',[],{shell:true});
_.stdout.on('data',(data) => {
const vids=JSON.parse(data.toString())
const vidId=vids.data[0].id;
getMediaURL(vidId);
}
)
}

getVidId();

function getMediaURL(vidId) {
const reqUrl=`https://graph.instagram.com/${vidId}?size=m&fields=media_type,caption,media_url&access_token=IGQWROVFR4RFVMTGlaTkFTSElFZADc5NTJpdjRnaGhXQUdaNWF5ay1RTV9SUkIwVllna2Vob2s1T2dpWjZAZAclNHNC1hY3Y1VktNMFZAsdFdsamZACQ1Y2dGlaWUtkSFN4YjR3Vl9peFNkTmZAUU2dhaDBPWDM0aHVRbWsZD`;
const post=spawn(`curl "${reqUrl}"`,[],{shell:true});
post.stdout.on('data',(data)=> {
const mediaURL=JSON.parse(data);

downloadVid(mediaURL);
}
)
}

function downloadVid(mediaURL) {
const vid=spawn(`curl "${mediaURL.media_url}" -O`,[],{shell:true});
const filename=new URL(mediaURL.media_url).pathname.split("/").slice(-1)[0];
pup(filename);
}

//sending video to user
const port=8000;


async function pup(filename) {
app=express();
app.use(cors());
ngrok.authtoken(authtoken);
app.get("/", async (req,res) => {
res.download(filename,(err)=>{
if (err) {console.log(err);}
else {console.log('downloaded successfully');}
})

})
app.listen(8000,()=>{
console.log('listening')
})
}


function w() {
http.createServer((req,res)=>{
res.write("hi");
res.end();}
).listen(()=>{
console.log(`listening on https://${hostname}:${port}`);
})
}

function delete_file(filename) {
fs.rmSync(filename);
}

