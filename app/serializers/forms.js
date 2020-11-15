import { Serializer } from 'lux-framework';

class FormsSerializer extends Serializer {
  attributes = [
    'name',
    'sections'
  ];

  hasOne = [
    'entity'
  ];

  hasMany = [
    'jobs',
    'suppliers'
  ];
}

export default FormsSerializer;
