import Company from "../models/Company.js";
import {
  createCompany,
  viewCompanyProfile,
  updateCompanyProfile,
} from "../controllers/companyControllers.js";
import authorization from "../middleware/authorization.js";
import isAdmin from "../middleware/adminAuthorization.js";
import { check, validationResult } from "express-validator";
import multer from "multer";
import express from "express";

const router = express.Router();

const validation = [
  check("companyContact.email")
    .notEmpty()
    .withMessage("E-mail is required.")
    .isEmail()
    .withMessage(
      "Please provide a valid email address (e.g., name@companyxyz.abc)"
    )
    .custom(async (value) => {
      const company = await Company.findOne({ "companyContact.email": value });
      if (company) {
        throw new Error("This email is already in use.");
      }
    }),
];

//logo upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/create",
  validation,
  (req, res, next) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      next();
    } else {
      res.status(400).send({ error: error.array() });
    }
  },
  createCompany
);

router.get(
  "/viewCompanyProfile/:userCompany",
  authorization,
  viewCompanyProfile
);

router.post(
  "/updateCompanyProfile/:userCompany",
  authorization,
  isAdmin,
  upload.single("companyLogo"),
  updateCompanyProfile
);

export default router;
