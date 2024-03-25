const figlet=require('figlet')

figlet('ShyamSunder Bobbilla',function(err,data){
    if(err){
        console.log('something went wrong');
    }
    console.log(data);
})