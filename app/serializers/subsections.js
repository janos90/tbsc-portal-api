import { Serializer } from 'lux-framework';

class SubsectionsSerializer extends Serializer {
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

export default SubsectionsSerializer;
