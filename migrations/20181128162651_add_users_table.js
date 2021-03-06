
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 250).notNullable().unique();
    tbl.string('password', 250).notNullable();
    tbl.string('department', 250).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
