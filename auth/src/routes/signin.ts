import express from "express";

const router = express.Router();
router.post("/api/users/signin", (req, res) => {
    res.send("Hi there!!"); // this is just to test if the route is working
});
export { router as signinRouter };