export function up(schema) {
  return schema.createTable('elements', table => {
    table.increments('id');
    table.string('image');
    table.string('text');
    table.string('input');
    table.string('name');
    table.string('radio');
    table.integer('section_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('elements');
}
