const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employees ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.getById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employees WHERE id = ?", [
      req.params.id,
    ]);
    if (!rows.length) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.create = async (req, res) => {
  try {
    const {
      name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
    } = req.body;
    const avatar = req.file
      ? `/${process.env.UPLOAD_DIR}/${req.file.filename}`
      : null;
    const [result] = await db.query(
      `INSERT INTO employees (name, employee_id, department, designation, project, type, status, avatar) VALUES (?,?,?,?,?,?,?,?)`,
      [
        name,
        employee_id,
        department,
        designation,
        project,
        type,
        status,
        avatar,
      ]
    );
    const [rows] = await db.query("SELECT * FROM employees WHERE id = ?", [
      result.insertId,
    ]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
    } = req.body;
    const avatar = req.file
      ? `/${process.env.UPLOAD_DIR}/${req.file.filename}`
      : undefined;

    const sql = `UPDATE employees SET name=?, employee_id=?, department=?, designation=?, project=?, type=?, status=? ${
      avatar ? ", avatar=?" : ""
    } WHERE id=?`;
    const params = avatar
      ? [
          name,
          employee_id,
          department,
          designation,
          project,
          type,
          status,
          avatar,
          id,
        ]
      : [name, employee_id, department, designation, project, type, status, id];

    await db.query(sql, params);
    const [rows] = await db.query("SELECT * FROM employees WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM employees WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
