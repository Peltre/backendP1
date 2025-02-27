import sql from 'mssql';

const sqlConfig = {
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  port: 1433,
  options: {
    trustedConnection: true, // Set to true if using Windows Authentication
    trustServerCertificate: true, // Set to true if using self-signed certificates
  }
}

const sqlConnect = async () => {
    return await sql.connect(sqlConfig)
};

export { sqlConnect, sql };
