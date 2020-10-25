import { Model } from 'lux-framework';

class Element extends Model {
      static belongsTo = {
        section: {
          inverse: 'elements'
        }
  };
}

export default Element;
