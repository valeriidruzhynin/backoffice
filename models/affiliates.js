const { DataTypes } = require('sequelize')
const sequelize = require('./mysql/adapter')

module.exports = sequelize.define('affiliates', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    media_network_type_id: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    secondary_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    default_campaign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    default_mobile_campaign_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    date_added: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    first_impression_date: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    first_visit_date: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    aim: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    msn: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    icq: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    yahoo: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    gmail: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    phone1: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    phone2: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email_validation: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      references: {
        model: 'affiliate_payment_type',
        key: 'payment_type'
      }
    },
    payment_username: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    payment_cheque_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    payment_payoneer: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'pending',
      references: {
        model: 'affiliate_status',
        key: 'id'
      }
    },
    affiliate_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      references: {
        model: 'affiliate_types',
        key: 'id'
      }
    },
    affiliate_sale_tracking_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    is_blocked: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    is_traffic_blocked: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_suspended: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    attempts: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    attempts_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    txta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    max_premium_upgrades_per_day: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    api_enabled: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    api_key: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      unique: true
    },
    secret: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    date_verified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    evaluation: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    account_mgr_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    is_lock_payment: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    is_blacklisted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    web_access: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    app_access: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    local_date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    under_review_count: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    promotion_description: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    promotion_product_service: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    salesforce_id: {
      type: DataTypes.STRING(18),
      allowNull: true,
      defaultValue: '0'
    },
    advertiser_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'advertisers',
        key: 'id'
      }
    },
    payment_payza: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    payment_paxum: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    date_added_original: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    primary_owner: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    account_tier: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    hear_about_us: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unblocked_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_reactivate_email: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    payment_term: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '15'
    },
    affiliate_hash: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'NULL'
    },
    payment_bitcoin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_epayments: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    payment_webmoney: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    payment_yandex: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    payment_moneypolo: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    report_frequency: {
      type: DataTypes.ENUM('daily','weekly','monthly','never'),
      allowNull: false,
      defaultValue: 'weekly'
    },
    last_report_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    drop_activity_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    drop_activity_check_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    convention: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    verticals: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traffic_source: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signup_partnership: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    signup_source: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'affiliates',
    timestamps: false
  }
)
