const { fork } = require('child_process');

const addintoQueue=({data})=>{
    // console.log(data);
    const child_process = fork('./queue.js');
    child_process.send( data , function(){
     console.log('Sending data')
    });
    child_process.on('close', (result) => {
        console.log(result);
        console.log('Child process terminated and returned');
    });
}
   
module.exports={addintoQueue}
