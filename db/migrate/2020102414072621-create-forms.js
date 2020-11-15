export function up(schema) {
  return schema.createTable('forms', table => {
    table.increments('id');
    table.string('name');
    table.integer('entity_id').index();
    table.timestamps();

    table.string('suppliers');

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('forms');
}
