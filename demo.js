const fs=require("fs");

const express=require("express");
const http=require("http");
const cors=require('cors');
const {spawn}=require("node:child_process");
const ngrok=require("@ngrok/ngrok");



const subprocess=spawn('curl "https://scontent-bos5-1.cdninstagram.com/o1/v/t16/f1/m82/D94344B5ACB21D35A9B3F357E0E5C599_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNTc2LmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-bos5-1.cdninstagram.com&_nc_cat=107&vs=387325513987418_2448746689&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EOTQzNDRCNUFDQjIxRDM1QTlCM0YzNTdFMEU1QzU5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBaXZLeGswdzVfZmF6b0RBTmUta3dYcUk3SW1icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJtCGsabV37FAFQIoAkMzLBdAI0QYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfA8m53phz8ks4dG2SWHEQR2k4IPE7NtSy4gIFXPRkjJ2w&oe=65BF3187&_nc_sid=1d576d&_nc_rid=d610c6eb7b" -k -O',{
shell:true})


addr='https://www.tiktok.com/@trendingcapcuttemplates/video/7309925081671552288';

const hostname='10.246.204.30';
const port=8000;


async function pup() {
app=express();
app.use(cors())
ngrok.authtoken('2c0HxbznQOxNjyaER5kOq0p0dKJ_5Mak8yptog5i8NgqFaPWL');
app.get("*", async (req,res) => {
res.download("\D94344B5ACB21D35A9B3F357E0E5C599_video_dashinit.mp4",()=>{
;})
})
app.listen(8000,()=>{
console.log('listenting')
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

function delete_file() {
fs.rmSync('\D94344B5ACB21D35A9B3F357E0E5C599_video_dashinit.mp4')
}

pup();
