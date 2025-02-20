"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Blogs", [
      {
        authorId: 1,
        title: "Kehidupan Dunia",
        image: "/images/pt7.jpg",
        content:
          "Kehidupan dunia yang kini semakin mencengkam dan semakin maju karna peradaban da sgala kemajuannya yang cukup signifikan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 2,
        title: "Mencari Kebenaran",
        image: "/images/pt5.jpg",
        content:
          "Dalam lini kehidupan, manusia di perintah untuk belajar dan memperluas pengetahuan untuk mengetahui segala teka-teki dunia.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        authorId: 3,
        title: "Jangan Mudah Percaya",
        image: "/images/pt3.jpg",
        content:
          "Belajar dan meyakini adalah sebuah barisan kehidupan yang akan menjadi proses tujuan pada manusia untuk mendapatkan suatu kepercayaan.",
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
    return queryInterface.bulkDelete("Blogs", null, {});
  },
};
