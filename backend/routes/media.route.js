// import express from "express";
// import upload from "../utils/multer.js";
// import { uploadMedia } from "../utils/cloudinary.js";

// const router = express.Router();

// router.route("/upload-video").post(upload.single("file"), async(req,res) => {
//     try {
//         const result = await uploadMedia(req.file.path);
//         res.status(200).json({
//             success:true,
//             message:"File uploaded successfully.",
//             data:result
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Error uploading file"})
//     }
// });
// export default router;


import express from "express";
import upload from "../utils/multer.js";
import { uploadMedia } from "../utils/cloudinary.js";

const router = express.Router();

// router.route("/upload-video").post(upload.single("file"), async(req,res) => {
//     try {
//         const result = await uploadMedia(req.file.path);
//         res.status(200).json({
//             success:true,
//             message:"File uploaded successfully.",
//             data:result
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Error uploading file"})
//     }
// });


router.route("/upload-video").post(upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "File is required" });
      }
  
      const result = await uploadMedia(req.file.path);
      res.status(200).json({
        success: true,
        message: "File uploaded successfully.",
        data: result,
      });
    } catch (error) {
      console.error("Error uploading video:", error);
      res.status(500).json({
        success: false,
        message: "Error uploading video to Cloudinary.",
      });
    }
  });
  
export default router;