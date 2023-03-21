const { DataTypes } = require('sequelize');

module.exports = (database) => {
	database.define(
		'favorites',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		
		},
		{
			timestamps: false,
		}
	);
};