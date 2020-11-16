import { Serializer } from 'lux-framework';

class SectionsSerializer extends Serializer {
  attributes = [
    'title'
  ];

  hasOne = [
    'form'
  ];

  hasMany = [
    'subsections'
  ];
}

export default SectionsSerializer;
