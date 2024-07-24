const fs = require('fs');
const fs = require('path');
const replacethis = "harry"
const replacewith = "john"
const preview = false;
const folder = _dirname;
try {
 fs.readdir(folder,("data", (err,data)=>{
     console.log(data);
    for(let index=0;index<data.length;index++){
      const item = data[index];
      let newFile = "/data"+item.replaceAll(replacethis,replacewith);
      let oldfile =path.join(folder,item);
      let newFile = path.join(folder,item.replaceAll(replaceThis,replacewith))
      if(!preview){
        fs.rename(oldFile,newFile()=>{
           console.log("File renamed");
       })
    }
      else{
       if("data/"+item!==newFile)
         fs.rename(newFile,()=>{
           
        
         console.log("data/"+item+"will be renamed to"+newFile)
         })
      }
    }
  })
 
} catch (err) {
  console.error(err);
}