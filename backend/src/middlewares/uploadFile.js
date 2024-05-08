const multer = require("multer");
const path = require("path");

const storage = {
  dest: path.resolve(__dirname, "..", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.random(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de arquivo inválido."));
    }
  },
};

const uploadFile = multer(storage).single("file");

module.exports = uploadFile;
