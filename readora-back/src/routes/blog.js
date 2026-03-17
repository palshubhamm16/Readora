import express from "express";
import multer from "multer";
import {
    createBlog,
    getLatestBlogs,
    getBlogsByUser,
    searchBlogs,
    blogDetails
} from "../controllers/blog.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/post", upload.single("image"), createBlog);
router.get("/latest", getLatestBlogs);
router.get("/search", searchBlogs);
router.get("/:id", blogDetails)

router.get("/user/:userId", getBlogsByUser);


export default router;
