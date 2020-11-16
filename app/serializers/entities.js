import { Serializer } from 'lux-framework';

class EntitiesSerializer extends Serializer {
  attributes = [
    'name',
    'email',
    'phone',
    'address',
    'image'
  ];

  hasOne = [
    'parent'
  ];

  hasMany = [
    'forms',
    'listings',
    'permissions',
    'jobs',
    'children'
  ];
}

export default EntitiesSerializer;
