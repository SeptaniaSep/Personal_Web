"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * seder berguna untuk membuat data dummy atau bohongan supaya tabel tidak
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        name: "Septania",
        email: "hafidzsyahn@gmail.com",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fawaz",
        email: "fawazz@gmail.com",
        password: "12121",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nopa",
        email: "nopa@gmail.com",
        password: "11111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
