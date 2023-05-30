const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.setPromisesDependency();
const authJWT = require("../../../middlewares/authJWT");
require("dotenv").config();
const emotionalController = require("./emotionalController");

//S3 config
aws.config.update({
  secretAccessKey: process.env.Secret_Access_Key,
  accessKeyId: process.env.Access_KeyId,
  region: process.env.Region,
});

const s3 = new aws.S3();

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

// media Recorder
mediaRecorderRouter.post(
  "/uploadCandidateVideo",
  requireAuth,
  uploadvideo.single("video"),
  emotionalController.addCandidateVideo
);
