module.exports = (sequelize, DataTypes) => {
    const Model  = sequelize.define ('AffiliateAttrLogs',  {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            affiliate_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            local_date_added: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            },
            utc_date_added: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: '0000-00-00 00:00:00'
            },
            field: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            old_value: {
                type: DataTypes.STRING(128),
                allowNull: true
            },
            new_value: {
                type: DataTypes.STRING(128),
                allowNull: true
            },
            initiator_id: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            initiator_type: {
                type: DataTypes.ENUM('cron','employee','salesforce','affiliate','salesforce_employee','trigger'),
                allowNull: true
            }
        }, {
            tableName: 'affiliate_attr_logs',
            timestamps: false
        }
    );

    Model.associate = models => {
        Model.belongsTo(models.Affiliates, {
            foreignKey: {
                name: 'affiliate_id',
                allowNull: false
            }
        });
    };

    return Model;
};







