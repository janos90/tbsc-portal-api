import { Model } from 'lux-framework';

class Section extends Model {
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

export default Section;
