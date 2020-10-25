import { Serializer } from 'lux-framework';

class EntitiesSerializer extends Serializer {
  attributes = [
    'name',
    'email',
    'phone',
    'address'
  ];

  hasOne = [
    'parent'
  ];

  hasMany = [
    'forms',
    'permissions',
    'jobs',
    'children'
  ];
}

export default EntitiesSerializer;
