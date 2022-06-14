import Warga from "../models/WargaModel.js";

export const getWarga = async (req, res) => {
  try {
    const response = await Warga.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWargaById = async (req, res) => {
  try {
    const response = await Warga.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createWarga = async (req, res) => {
  try {
    await Warga.create(req.body);
    res.status(201).json({ msg: "Warga berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWarga = async (req, res) => {
  try {
    await Warga.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Warga berhasil diubah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWarga = async (req, res) => {
  try {
    await Warga.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Warga berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
