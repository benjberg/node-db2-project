
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments('id');

      tbl.string('VIN', 17).notNullable().unique().index();
      tbl.string('make', 150).notNullable().index();
      tbl.string('modle', 150).notNullable().index();
      tbl.integer('mileage').notNullable().index();
      tbl.string('transmission type', 50);
      tbl.string('reg status', 100);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
