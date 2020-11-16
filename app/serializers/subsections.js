import { Serializer } from 'lux-framework';

class SectionsSerializer extends Serializer {
  attributes = [
    'title'
  ];

  hasOne = [
    'section'
  ];

  hasMany = [
    'elements'
  ];
}

export default SectionsSerializer;
