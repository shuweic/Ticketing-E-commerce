import express, {Request, Response} from "express";
import {body, validationResult} from "express-validator";
import {User} from "../models/user";
import {RequestValidationError} from "../errors/request-validation-error";

const router = express.Router();

router.post(
    "/api/users/signup",
    [
        body("email")
            .isEmail()
            .withMessage("Email must be valid"),
        body("password")
            .trim()
            .isLength({min: 4, max: 20})
            .withMessage("Password must be between 4 and 20 characters"),
    ],
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        // Does the user already exist?
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});

        if (existingUser) {
            console.log("Email in use");
            return res.send({});
        }

        // Hash the password


        // Create the user
        const user = User.build({email, password});
        await user.save();

        res.status(201).send(user);

    }
);

export {router as signupRouter};
