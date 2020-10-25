export function up(schema) {
  return schema.createTable('jobs', table => {
    table.increments('id');
    table.integer('job_number');
    table.string('status');
    table.string('title');
    table.string('owner');
    table.string('suburb');
    table.string('city');
    table.string('address');
    table.integer('bedrooms');
    table.string('description');
    table.string('category');
    table.integer('created_by_id').index();
    table.integer('entity_id').index();
    table.integer('form_id').index();
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('jobs');
}
