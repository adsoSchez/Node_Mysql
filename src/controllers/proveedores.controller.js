// ...existing code...
import { pool } from '../db.js'

// Obtener todos los proveedores
export const getProveedores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proveedores");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// Obtener un proveedor por ID
export const getProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM proveedores WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Proveedor not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// Eliminar un proveedor por ID
export const deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM proveedores WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Proveedor not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// Crear un nuevo proveedor
export const createProveedor = async (req, res) => {
  try {
    const { name, telefono, descripcion } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO proveedores (name, telefono, descripcion) VALUES (?, ?, ?)",
      [name, telefono, descripcion]
    );
    res.status(201).json({ id: rows.insertId, name, telefono, descripcion });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// Actualizar un proveedor por ID
export const updateProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, telefono, descripcion } = req.body;

    const [result] = await pool.query(
      "UPDATE proveedores SET name = IFNULL(?, name), telefono = IFNULL(?, telefono), descripcion = IFNULL(?, descripcion) WHERE id = ?",
      [name, telefono, descripcion, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Proveedor not found" });

    const [rows] = await pool.query("SELECT * FROM proveedores WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
