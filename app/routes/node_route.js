module.export = function(app,db){
	app.post('/notes',(req,res) =>{
		res.send('Hello');
	});
	
};