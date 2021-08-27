const bull = require('bull');
const { mailer } = require('./mailer');
const testQueue = new bull('test queue server');
const xl = require('excel4node')
let workbook = new xl.Workbook();
var orgFilename = new Date().getTime().toString()
let sheet = workbook.addWorksheet('reports');
process.on('message',(msg)=>{
    console.log(msg  , "Data recieved");
    testQueue.add({name:"Task queue"}).then(data=>{
        console.log(data);
    }).catch(er=>{
        console.log(er);
    })
    testQueue.process(async (job)=>{
        mailer({to:"khalid.raza@cobold.in" , htmlMsg:"" , plainMsg:" " , subject:"sdkhdsc"})
        .then(data=>{
            console.log(data);
        }).catch(Er=>{
            console.log(Er);
        })
        for (let index = 0; index < 100000; index++) {
            console.log(index);
            sheet.cell(0).number(index)
        }
    })
    testQueue.on('completed' , ()=>{
        workbook.write(`static/${orgFilename}-reports.xls`)
        process.exit(100)
    
    })
})


