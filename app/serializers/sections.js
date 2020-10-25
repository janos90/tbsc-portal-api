import { Serializer } from 'lux-framework';

class SectionsSerializer extends Serializer {
  attributes = [
    'title',
    'name'
  ];

  hasOne = [
    'form',
    'parent'
  ];

  hasMany = [
    'elements',
    'sections'
  ];
}

export default SectionsSerializer;
