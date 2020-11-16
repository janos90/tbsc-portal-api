import { Model } from 'lux-framework';

class Subsection extends Model {
  static hasMany = {
    elements: {
      inverse: 'section',
      model: 'element'
    }
  };

  static belongsTo = {
    section: {
      inverse: 'subsections',
      model: 'section'
    }
  };
}

export default Subsection;
