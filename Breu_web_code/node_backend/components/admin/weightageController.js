const colors = require("../../helpers/colors");
const AppError = require("../../helpers/appError");
const weightageDAL = require("./weightageDAL");

module.exports.getAllWeightages = async (req, res, next) => {
  try {
    const data = await weightageDAL.getAllWeightages();
    return res.send({ message: "SUCCESS", data: data });
  } catch (error) {
    console.error(colors.red, `Error fetching weightages`, error);
    return next(new AppError(error, 400));
  }
};

module.exports.addWeightages = async function (req, res, next) {
  try {
    const data = req.body;
    const addWeightages = await weightageDAL.addWeightage(data);
    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Weightages added successfully" });
  } catch (err) {
    console.error(colors.red, `Error while adding Weightages`, err);
    return next(new AppError(err, 400));
  }
};
