const Missing = require("../models/MissingPerson");
const cloudinary = require("../services/cloudinary");

/* ================= CREATE ================= */
exports.create = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
      imageUrl = upload.secure_url;
    }

    const data = await Missing.create({
      ...req.body,
      image: imageUrl,
      createdBy: req.user._id
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: "Failed to create" });
  }
};

/* ================= GET ALL ================= */
exports.getAll = async (_, res) => {
  const data = await Missing.find().sort({ createdAt: -1 });
  res.json(data);
};

/* ================= UPDATE ================= */
exports.update = async (req, res) => {
  const data = await Missing.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(data);
};

/* ================= DELETE ================= */
exports.remove = async (req, res) => {
  await Missing.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
