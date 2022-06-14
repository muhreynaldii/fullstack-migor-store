import Rt from "../models/RtModel.js";

export const getRt = async (req, res) => {
  try {
    const response = await Rt.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRtById = async (req, res) => {
  try {
    const response = await Rt.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createRt = async (req, res) => {
  try {
    await Rt.create(req.body);
    res.status(201).json({ msg: "Rt berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRt = async (req, res) => {
  try {
    await Rt.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Rt berhasil diubah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRt = async (req, res) => {
  try {
    await Rt.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Rt berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
