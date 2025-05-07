import sql from 'mssql';

export const sqlConfig = {
  server: 'localhost',
  port: 1433,
  database: 'MIC_betaapps',
  user: 'sa',
  password: 'sql2025',
  options: {
    encrypt: false, // Disable for local
    trustServerCertificate: true
  }
};
export async function checkConnection() {
  try {
    await sql.connect(sqlConfig);
    console.log('✅ Connected to SQL Server successfully!');
  } catch (err) {
    console.error('❌ Connection failed:', err);
  } finally {
    await sql.close();
  }
}