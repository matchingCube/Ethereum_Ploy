const User = require("../models/users");
const path = require("path");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

exports.createUser = async (req, res) => {
  const {
    wallet,
    name,
    headline,
    bio,
    linkedin,
    facebook,
    twitter,
    discord,
    github,
    instagram
  } = req.body;

  const isExist = await User.findOne({ name });
  console.log(name, headline);

  if (isExist) {
    return res.status(400).json({ error: "The user already exists" });
  }

  const newUser = new User({
    image: req.file.filename,
    name,
    wallet,
    headline,
    bio,
    linkedin,
    facebook,
    github,
    twitter,
    discord,
    instagram
  });
  await newUser.save();

  const users = await User.find();
  console.log(users);
  res.json({ success: true });
};

// exports.getAllUsers = async (req, res) => {
//   const Users = await User.find().sort({ createdAt: -1 });
//   res.json({ Users });
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const influencer = await Influencer.findById(req.params.id);
//     res.json({ influencer });
//   } catch (error) {
//     res.status(400).json({ error: "The link is not correct" });
//   }
// };

// exports.login = async (req, res) => {
//   const { account } = req.body;
//   jwt.sign(
//     { account },
//     keys.secretOrKey,
//     {
//       expiresIn: 31556926 // 1 year in seconds
//     },
//     (err, token) => {
//       res.json({
//         success: true,
//         token: "Bearer " + token
//       });
//     }
//   );
// };

// exports.updateInfluencer = async (req, res) => {
//   try {
//     const { name, description, chain, twitter, telegram, instagram } = req.body;
//     const { id } = req.params;

//     await Influencer.findOneAndUpdate(
//       { _id: id },
//       { name, description, chain, twitter, telegram, instagram }
//     );

//     res.json({ success: true });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.deleteInfluencer = async (req, res) => {
//   try {
//     await Influencer.findByIdAndDelete(req.params.id);
//     const influencers = await Influencer.find();
//     res.json({ influencers });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.approveInfluencer = async (req, res) => {
//   try {
//     const currentInfluencer = await Influencer.findOne({ _id: req.params.id });
//     await Influencer.findByIdAndUpdate(req.params.id, {
//       $set: { approved: !currentInfluencer.approved }
//     });
//     const influencers = await Influencer.find();
//     res.json({ influencers });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.voteInfluencer = async (req, res) => {
//   try {
//     const { account } = req.body;
//     const { id } = req.params;
//     const isExist = await Influencer.findOne({
//       _id: id,
//       votes: account
//     });

//     if (isExist) {
//       await Influencer.findOneAndUpdate(
//         { _id: id },
//         { $pull: { votes: account } }
//       );
//     } else {
//       await Influencer.findOneAndUpdate(
//         { _id: id },
//         { $push: { votes: account } }
//       );
//     }

//     const currentInfluencer = await Influencer.findById(id);
//     await Influencer.findOneAndUpdate(
//       { _id: id },
//       { $set: { voteCount: currentInfluencer.votes.length } }
//     );

//     const influencers = await Influencer.find();
//     res.json({ influencers });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.promoteInfluencer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { promotion } = req.body;
//     await Influencer.findOneAndUpdate({ _id: id }, { $set: { promotion } });
//     const influencers = await Influencer.find();
//     res.json({ influencers });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.leaveComment = async (req, res) => {
//   try {
//     const { account, text } = req.body;
//     const { id } = req.params;
//     const isExist = await Influencer.findOne({
//       _id: id,
//       "comments.account": account
//     });

//     if (isExist) {
//       return res
//         .status(400)
//         .json({ error: "You've already commented on this project" });
//     }

//     await Influencer.findOneAndUpdate(
//       { _id: id },
//       { $push: { comments: { account, text } } }
//     );
//     const influencer = await Influencer.findById(id);
//     res.json({ influencer });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.leaveRate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { account, rates } = req.body;
//     const isExist = await Influencer.findOne({
//       _id: id,
//       "ratings.account": account
//     });
//     const averageRate = (
//       (rates.quality + rates.safety + rates.trust) /
//       3
//     ).toFixed(1);
//     if (isExist) {
//       await Influencer.findOneAndUpdate(
//         { _id: id, "ratings.account": account },
//         {
//           $set: {
//             "ratings.$.average": averageRate,
//             "ratings.$.quality": rates.quality,
//             "ratings.$.safety": rates.safety,
//             "ratings.$.trust": rates.trust,
//             "ratings.$.updateAt": Date.now()
//           }
//         }
//       );
//     } else {
//       await Influencer.findOneAndUpdate(
//         { _id: id },
//         {
//           $push: {
//             ratings: {
//               account,
//               average: averageRate,
//               quality: rates.quality,
//               safety: rates.safety,
//               trust: rates.trust,
//               updateAt: Date.now()
//             }
//           }
//         }
//       );
//     }

//     // Update NFT average rate value
//     const currentInfluencer = await Influencer.findById(id);

//     const sumAllRates = currentInfluencer.ratings
//       .map((item) => item.average)
//       .reduce((prev, next) => Number(prev) + Number(next));

//     const averageInfluencerRate = (
//       sumAllRates / currentInfluencer.ratings.length
//     ).toFixed(1);

//     await Influencer.findOneAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           averageRate: averageInfluencerRate,
//           ratingCount: currentInfluencer.ratings.length
//         }
//       }
//     );
//     // -------------------------------

//     const influencer = await Influencer.findById(id);
//     res.json({ influencer });
//   } catch (error) {
//     res.status(400).json({ error: "The influencer id is not correct" });
//   }
// };

// exports.filterInfluencer = async (req, res) => {
//   const { chain, sort } = req.body;
//   let whereQuery = { approved: true };
//   let sortQuery = { averageRate: -1 };
//   let limit;

//   if (chain !== "all") {
//     whereQuery.chain = chain;
//   }

//   // if (sort === "new") {
//   //   sortQuery = { createdAt: -1 };
//   // } else if (sort === "funded") {
//   //   whereQuery.promotion = "funded";
//   // }

//   // if (filter === "top") {
//   //   whereQuery.averageRate = { $gte: 4 };
//   //   whereQuery.ratingCount = { $gte: 1 };
//   // } else if (filter === "most_wanted") {
//   //   whereQuery.averageRate = { $gte: 4 };
//   //   sortQuery.ratingCount = -1;
//   // }

//   const influencers = await Influencer.find(whereQuery)
//     .sort(sortQuery)
//     .limit(limit);
//   res.json({ influencers });
// };
