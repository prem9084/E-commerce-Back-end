import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await UserModel.find({ role: 0 });
    res.status(200).send({
      success: true,
      totalCount: user.length,
      message: "All User Fatched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
