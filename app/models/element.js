import { Model } from 'lux-framework';

class Element extends Model {
  static belongsTo = {
    subsection: {
      inverse: 'elements',
      model: 'subsection'
    }
  };
}

export default Element;
