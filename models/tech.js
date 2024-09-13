import { Schema, model, models } from 'mongoose';

const TechSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tech: {
    type: String,
    required: [true, 'Required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  keyword1: {
    type: String,
    required: [true, 'Required.'],
  },
  roadmap: {
    type: String,
    required: [true, 'roadmap is required.'],
  }
});

const Tech = models.Tech || model('Tech', TechSchema);

export default Tech;