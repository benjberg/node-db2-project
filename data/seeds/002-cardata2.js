
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1w3e456trf7654rty', make: 'toyota', modle: 'Camry', mileage: 34000 },
        {VIN: '3ew243er5t76t54t5', make: 'nissan', modle: 'sentra', mileage: 50000},
        {VIN: '9u87y6ht56t56y78u', make: 'honda', modle: 'civic', mileage: 75000}
      ]);
    });
};
