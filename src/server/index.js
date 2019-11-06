require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const ctrl = require("./controller");
const aws = require("aws-sdk");

const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000000000000000000000000
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("server connected");
  app.listen(SERVER_PORT, () =>
    console.log(`listening on server ${SERVER_PORT}`)
  );
});

app.get(`/api/sign-s3`, (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
  };
  const S3_BUCKET = process.env.BUCKET;

  const s3 = new aws.S3();
  const fileName = req.query.fileName;
  const fileType = req.query.fileType;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };

  s3.getSignedUrl(`putObject`, s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazon.com/${fileName}`
    };
    console.log(returnData);
    return res.status(200).send(returnData);
  });
});

app.get(`/getuser`, ctrl.getUser);
app.get(`/sessiontest`, ctrl.sessionTest);
app.get(`/register`, ctrl.register);

app.post(`/login`, ctrl.login);
