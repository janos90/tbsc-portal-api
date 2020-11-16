export function up(schema) {
  return schema.createTable('entities', table => {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('phone');
    table.string('address');
    table.string('image');

    table.integer('parent_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('entities');
}
