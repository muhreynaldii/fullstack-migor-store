import Domisili from "../models/DomisiliModel.js";

export const getDomisili = async (req, res) => {
  try {
    const response = await Domisili.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDomisiliById = async (req, res) => {
  try {
    const response = await Domisili.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDomisili = async (req, res) => {
  try {
    await Domisili.create(req.body);
    res.status(201).json({ msg: "Domisili berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDomisili = async (req, res) => {
  try {
    await Domisili.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Domisili berhasil diubah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDomisili = async (req, res) => {
  try {
    await Domisili.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Domisili berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
