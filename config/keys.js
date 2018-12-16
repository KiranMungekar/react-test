if(process.env.NODE_EVN === 'production'){
    module.exports =require('./prod');
}else{
    module.exports =require('./dev');
}