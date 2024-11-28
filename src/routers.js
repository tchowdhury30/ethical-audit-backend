import { Router } from 'express';
import * as CompanyRecords from './controllers/company_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to our platform api!' });
});

// Methods for Company model
const handleGetCompanyRecords = async (req, res) => {
  try {
    const result = await CompanyRecords.getCompanyRecords();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleGetCompanyRecord = async (req, res) => {
  try {
    const result = await CompanyRecords.getCompanyRecord(req.params.companyId);
    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const handleCreateCompanyRecord = async (req, res) => {
  try {
    const {
      companyName, productCategories, categorizedScores, overallScore, summary, logoImage,
    } = req.body;
    const result = await CompanyRecords.createCompanyRecord({
      companyName, productCategories, categorizedScores, overallScore, summary, logoImage,
    });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleUpdateCompanyRecord = async (req, res) => {
  try {
    const result = await CompanyRecords.updateCompanyRecord(req.params.companyId, req.body);
    if (!result) {
      return res.status(404).json({ error: 'Company not found' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleDeleteCompanyRecord = async (req, res) => {
  try {
    const result = await CompanyRecords.deleteCompanyRecord(req.params.companyId);
    if (!result) {
      return res.status(404).json({ error: 'Company record not found' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleGetPopularCompanies = async (req, res) => {
  try {
    const result = await CompanyRecords.getPopularCompanies(req.params.category);
    if (!result) {
      return res.status(404).json({ error: 'Company records not found' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleGetBoycottedCompanies = async (req, res) => {
  try {
    const result = await CompanyRecords.getBoycottedCompanies(req.params.category);
    if (!result) {
      return res.status(404).json({ error: 'Company records not found' });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const handleGetCompanyInfo = async (req, res) => {
  const { companyName } = req.params;

  if (!companyName) {
    return res.status(400).json({ error: 'Company name is required' });
  }

  try {
    const companyData = await CompanyRecords.getCompanyInfo(companyName);
    console.log('\nThe company data returned is: ', companyData);
    return res.json(companyData);
  } catch (error) {
    console.error('Error fetching company data:', error);
    return res.status(500).json({ error: 'An error occurred while fetching the company information.' });
  }
};

const handleGetProductInfo = async (req, res) => {
  const { barcode } = req.params;

  if (!barcode) {
    return res.status(400).json({ error: 'Product\'s product is required' });
  }

  try {
    const companyInfo = await CompanyRecords.fetchProductInfo(barcode);
    console.log('\nThe product\'s companyInfo is: ', companyInfo);
    return res.json(companyInfo);
  } catch (error) {
    console.error('Error fetching company data:', error);
    return res.status(500).json({ error: 'An error occurred while fetching the company information.' });
  }
};

router.route('/records/getProductInfo/:barcode').get(handleGetProductInfo);
router.route('/records/getPopularCompanies/:category').get(handleGetPopularCompanies);
router.route('/records/getBoycottedCompanies/:category').get(handleGetBoycottedCompanies);
router.route('/records/getCompanyInfo/:companyName').get(handleGetCompanyInfo);
router.route('/records/companies').get(handleGetCompanyRecords).post(handleCreateCompanyRecord);
router.route('/records/companies/:companyId')
  .get(handleGetCompanyRecord)
  .put(handleUpdateCompanyRecord)
  .delete(handleDeleteCompanyRecord);

export default router;
