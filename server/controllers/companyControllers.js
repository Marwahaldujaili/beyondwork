import Company from "../models/Company.js";

export const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.json(newCompany);
  } catch (error) {
    res.json(error);
  }
};

export const viewCompanyProfile = async (req, res) => {
  try {
    const company = await Company.findById(req.user.userCompany)
    res.json(company);
  } catch (error) {
    res.json({ error: error.message });
  }

};

export const updateCompanyProfile = async (req, res) => {
  try {
    const updatedCompanyData = req.body; 

    const updatedCompany = await Company.findByIdAndUpdate(
      req.user.userCompany, 
      updatedCompanyData,
      { new: true }
    );

    res.json(updatedCompany);
  } catch (error) {
    res.json({ error: error.message });
  }
};