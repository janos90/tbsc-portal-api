import { Serializer } from 'lux-framework';

class JobsSerializer extends Serializer {
  attributes = [
    'jobNumber',
    'status',
    'title',
    'owner',
    'suburb',
    'city',
    'address',
    'bedrooms',
    'description',
    'category'
  ];

  hasOne = [
    'createdBy',
    'entity',
    'form'
  ];

  hasMany = [
    'files'
  ];
}

export default JobsSerializer;
