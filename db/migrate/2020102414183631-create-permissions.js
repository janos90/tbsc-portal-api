export function up(schema) {
  return schema.createTable('permissions', table => {
    table.increments('id');
    table.string('level');
    table.integer('entity_id').index();
    table.integer('user_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('permissions');
}
