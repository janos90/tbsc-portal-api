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
    'parent',
    'receiver'
  ];

  hasMany = [
    'forms',
    'suppliers',
    'permissions',
    'jobs',
    'children'
  ];
}

export default EntitiesSerializer;
