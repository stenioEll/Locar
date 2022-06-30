'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        references:{
          model:'Empresas',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      id_funcionario: {
        type: Sequelize.INTEGER,
        references:{
          model:'Usuarios',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      status: {
        type: Sequelize.STRING
      },
      perfil: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Funcionarios');
  }
};