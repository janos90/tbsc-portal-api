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
    'section'
  ];
}

export default ElementsSerializer;
