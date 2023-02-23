const express = require("express");
const admin = require("../../middlewares/AuthMiddleware");
const upload = require("../../utils/multerConfig");
const router = express.Router();

const userController = require("../../controllers/UserController");

// router.get("/get", userController.getAllInfluencers);
// router.get("/getbyid/:id", userController.getInfluencerById);
// router.post("/login", userController.login);
router.post("/create", upload(), userController.createUser);
// router.delete("/delete/:id", admin, userController.deleteInfluencer);
// router.put(
//   "/update/:id",
//   admin,
//   upload(),
//   userController.updateInfluencer
// );
// router.put("/comment/:id", userController.leaveComment);
// router.put("/rate/:id", userController.leaveRate);
// router.put("/approve/:id", admin, userController.approveInfluencer);
// router.put("/vote/:id", userController.voteInfluencer);
// router.put("/promote/:id", admin, userController.promoteInfluencer);
// router.post("/filter", userController.filterInfluencer);

module.exports = router;
