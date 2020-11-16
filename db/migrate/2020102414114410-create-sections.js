export function up(schema) {
  return schema.createTable('sections', table => {
    table.increments('id');
    table.string('title');
    table.integer('form_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('sections');
}
