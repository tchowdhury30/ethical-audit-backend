// I used chatgpt to create this schema efficiently
import mongoose from 'mongoose';

const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  categorizedScores: {
    type: Map,
    of: new Schema({
      score: {
        type: String,
        required: true,
      },
      explanation: {
        type: String,
        required: true,
      },
    }),
    required: true,
  },
  productCategories: {
    type: [String],
    required: true,
  },
  overallScore: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  logoImage: {
    type: String,
    required: true,
  },
});

const CompanyModel = mongoose.model('CompanyRecord', companySchema);

export default CompanyModel;
