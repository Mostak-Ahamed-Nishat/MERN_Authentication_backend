import asyncHandler from "express-async-handler";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.json({ message: "Success" });
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Registration controller");
});

//@desc   Logout user / clear cookies
//@route  POST /api/users/logout
//access  Public

const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout controller");
});

//@desc  Get user profile
//route  GET /api/users/profile
//access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("User profile controller");
});

//@desc   Update user profile
//@route  PUT /api/user/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile controller");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
