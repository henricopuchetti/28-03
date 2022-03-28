module.exports = (app)=>{
    var database = require('../config/database')
    var gallery = require('../models/gallery')
    app.get('/gallery', async(req,res)=>{
        database()
        var documento = await gallery.find()
        res.render('gallery.ejs', {dados:documento})
    })
    var multer = require('../config/multer')
    app.post('/gallery', multer.single('imagem'),async(req,res)=>{
        database()
        var documento = await new gallery({
            arquivo:req.file.filename
        }).save()
        res.redirect('/gallery')
    })
}