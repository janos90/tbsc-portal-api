import { Serializer } from 'lux-framework';

class ElementsSerializer extends Serializer {
  attributes = [
    'image',
    'text',
    'input',
    'name',
    'radio'
  ];

  hasOne = [
    'subsection'
  ];
}

export default ElementsSerializer;
