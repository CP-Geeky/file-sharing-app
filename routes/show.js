const router = require('express').Router();
const File = require('../models/fileModel')

router.get('/:uuid', async (req, res) => {
    try{
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download', {error: 'Link has been expired bro'});
        }
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            //http:localhost:3000/files/download/34567fggh-sdfef3r45
            
        })
    } catch(err){
        return res.render('download', {error: 'Something went wrong buddy!!'});
    }
    
})


module.exports = router;