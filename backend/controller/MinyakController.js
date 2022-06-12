import Minyak from "../models/MinyakModel.js";

export const getMinyak = async (req, res) => {
  try {
    const response = await Minyak.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMinyakById = async (req, res) => {
  try {
    const response = await Minyak.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMinyak = async (req, res) => {
  try {
    await Minyak.create(req.body);
    res.status(201).json({ msg: "Minyak berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMinyak = async (req, res) => {
  try {
    await Minyak.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Minyak berhasil diubah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMinyak = async (req, res) => {
  try {
    await Minyak.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Minyak berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
