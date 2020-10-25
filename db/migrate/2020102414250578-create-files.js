export function up(schema) {
  return schema.createTable('files', table => {
    table.increments('id');
    table.integer('job_id').index();
    table.string('location');
    table.string('file_type');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('files');
}
