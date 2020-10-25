export function up(schema) {
  return schema.createTable('users', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('user_name');
    table.string('password');
    table.string('default_sort');
    table.string('default_filter');
    table.string('role');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('users');
}
