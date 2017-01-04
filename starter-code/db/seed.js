var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};

var managerCreate = function() {
	return DB.Manager.create({
	name: 'manager guy',
    email: 'asdf@asdf.com',
    office_number: '555-555-5555',
    cell_phone_number: '666-666-6666'
	});
};

artistCreate()
.then(managerCreate())
.then(function() {
	process.exit();
});