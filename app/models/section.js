import { Model } from 'lux-framework';

class Section extends Model {
  static hasMany = {
    subsections: {
      inverse: 'section',
      model: 'subsection'
    }
  };

  static belongsTo = {
    form: {
      inverse: 'sections',
      model: 'form'
    }
  };
}

export default Section;
