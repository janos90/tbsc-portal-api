import { Serializer } from 'lux-framework';

class PermissionsSerializer extends Serializer {
  attributes = [
    'level'
  ];

  hasOne = [
    'entity',
    'user'
  ];
}

export default PermissionsSerializer;
