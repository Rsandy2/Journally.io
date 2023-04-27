const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const User = require("./schema/Users");
const fs = require("fs");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://Cluster56618:aG54flhgZkNH@cluster56618.o96lbgk.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "journal_entries" }
  );
}
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

const port = 5173;

app.use(
  cors({
    origin: "*",
  })
);

// var data = require("./boot/routes.js");
const { create_entries } = require("./models/newEntry.js");
const { fetch_entries } = require("./models/fetchEntry");
const { update_entries } = require("./models/updateEntry");
const { delete_entries } = require("./models/deleteEntry");
const ImageModel = require("./models/image-model");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array("ImageFile"), (req, res) => {
  console.log(req.files);

  req.files.forEach((file) => {
    const saveImage = ImageModel({
      name: file.fieldname,
      image: {
        data: fs.readFileSync("uploads/" + file.originalname),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
  });
  // const saveImage = ImageModel({
  //   name: req.body.name,
  //   image: {
  //     data: fs.readFileSync("uploads/" + req.file.filename),
  //     contentType: "image/png",
  //   },
  // });
  // saveImage
  //   .save()
  //   .then((res) => {
  //     console.log("image is saved");
  //   })
  //   .catch((err) => {
  //     console.log(err, "error has occur");
  //   });
  res.send("image is saved");
});

// app.use("./boot/routes", data);

app.post("/create-entries", async (req, res) => {
  console.log(req.body);
  const entry = await create_entries(req.body).catch(console.dir);
  console.log("Entry Created");
  res.json({ data: entry });
});

app.post("/update-entries", async (req, res) => {
  console.log(req.body);
  const entry = await update_entries(req.body).catch(console.dir);
  console.log("Entry Updated");
  res.json({ data: entry });
});

app.post("/delete-entries", async (req, res) => {
  console.log(req.body);
  await delete_entries(req.body).catch(console.dir);
  console.log("Entry Deleted");
  res.json({ data: "Deleted" });
});

app.get("/fetch-entries", async (req, res) => {
  const entries = await fetch_entries();
  res.json({ data: entries });
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password should be atleast 6 characters" });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({ msg: "Both the passwords dont match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with the same email already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 8);
    const newUser = new User({ email, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log(savedUser.email);
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ msg: "User with this email does not exist" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Incorrect password." });
    }
    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// to get the users credentials
app.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);

  res.json({
    email: user.email,
    id: user._id,
  });
});

app.get("/getupload", async (req, res) => {
  const allData = await ImageModel.find();
  res.json(allData);
});

// app.get("/file/:filename", async (req, res) => {
//   try {
//     const file = await gfs.files.findOne({ filename: req.params.filename });
//     const readStream = gfs.createReadStream(file.filename);
//     readStream.pipe(res);
//   } catch (error) {
//     res.send("not found");
//   }
// });

// app.delete("/file/:filename", async (req, res) => {
//   try {
//     await gfs.files.deleteOne({ filename: req.params.filename });
//     res.send("success");
//   } catch (error) {
//     console.log(error);
//     res.send("An error occured.");
//   }
// });
app.listen(port, () => {
  console.log(`Application Listening on port ${port}`);
});
