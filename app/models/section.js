import { Model } from 'lux-framework';

class Section extends Model {
      static hasMany = {
        elements: {
          inverse: 'section'
        },

        sections: {
          inverse: 'parent',
          model: 'section'
        }
      };

      static belongsTo = {
        form: {
          inverse: 'sections',
          model: 'form'

        },

        parent: {
          inverse: 'sections',
          model: 'section'
        }
  };
}

export default Section;
