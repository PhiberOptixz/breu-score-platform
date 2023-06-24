const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const authJWT = require("../../../middlewares/authJWT");
require("dotenv").config();
const emotionalController = require("./emotionalController");

//S3 config
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.Access_KeyId,
    secretAccessKey: process.env.Secret_Access_Key,
  },
  region: process.env.Region,
});

//aws upload configs
const uploadvideo = multer({
  storage: multerS3({
    s3: s3,
    bucket: "breu",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      let name = `${Math.floor(1000 + Math.random() * 9000)}${Date.now()}${
        file.originalname
      }.mp4`;
      cb(null, "candidateVideos/" + Date.now() + "+" + name);
    },
  }),
});

// Upload candidate video
router.post(
  "/uploadCandidateVideo",
  authJWT.verifyJWTToken,
  async (req, res, next) => {
    try {
      uploadvideo.single("video")(req, res, (err) => {
        if (err) {
          console.log("err", err);
          return res.status(500).send({
            success: false,
            message:
              "Something went wrong while uploading the video.Please try again!!!",
          });
        }

        const file = req.file;
        if (!file) {
          return res
            .status(500)
            .send({ success: false, message: "Please upload a video" });
        }
        const document = {
          key: file.key,
          link: file.location,
          name: file.originalname,
        };
        res.fileData = document;
        return next();

        //   res.send({ success: true, fileInfo: document });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  emotionalController.addCandidateVideo
);

module.exports = router;
