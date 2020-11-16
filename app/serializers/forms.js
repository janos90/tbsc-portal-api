import { Serializer } from 'lux-framework';

class FormsSerializer extends Serializer {
  attributes = [
    'name'
  ];

  hasOne = [
    'entity'
  ];

  hasMany = [
    'sections',
    'jobs',
    'suppliers'
  ];
}

export default FormsSerializer;
