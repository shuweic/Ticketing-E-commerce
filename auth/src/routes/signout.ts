import express from "express";

const router = express.Router();
router.post("/api/users/signout", (req, res) => {
    res.send("Hi there!!"); // this is just to test if the route is working
});
export { router as signoutRouter };