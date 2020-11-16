export function up(schema) {
  return schema.createTable('subsections', table => {
    table.increments('id');
    table.string('title');
    table.integer('section_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('subsections');
}
