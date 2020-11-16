import { Model } from 'lux-framework';

class Section extends Model {
  static hasMany = {
    subsections: {
      inverse: 'parent',
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
