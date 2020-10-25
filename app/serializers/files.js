import { Serializer } from 'lux-framework';

class FilesSerializer extends Serializer {
  attributes = [
    'location',
    'fileType'
  ];

  hasOne = [
    'job'
  ];
}

export default FilesSerializer;
