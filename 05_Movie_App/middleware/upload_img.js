const multer =  require("multer");
const path =   require("path");

const storage  = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads")
    },

    filename: (req, file, cb) => {
        cb(null, `IMG-${ Date.now()}`)
    }
})

const upload =  multer({storage});
module.exports =  upload;