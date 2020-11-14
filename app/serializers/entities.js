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
    'permissions',
    'jobs',
    'children',
    'listings'
  ];
}

export default EntitiesSerializer;
