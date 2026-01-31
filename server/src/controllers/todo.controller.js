const Todo = require("../models/Todo"); // ⭐ FIXED

/* ================= CREATE ================= */
exports.create = async (req, res) => {
  try {
    const todo = await Todo.create({
      user: req.user.id,
      title: req.body.title
    });

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Create failed" });
  }
};

/* ================= GET ================= */
exports.getMine = async (req, res) => {
  try {
    const todos = await Todo
      .find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Fetch failed" });
  }
};

/* ================= UPDATE ================= */
exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Update failed" });
  }
};

/* ================= DELETE ================= */
exports.remove = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Delete failed" });
  }
};
