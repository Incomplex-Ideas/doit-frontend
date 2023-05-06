type ENV = {
  API_URL: string;
  API_PREFIX: string;
}

const envConfig: ENV = {
  API_URL: process.env.API_URL || 'https://momentum-backend.onrender.com/',
  API_PREFIX: process.env.API_PREFIX || 'api/v1/'
}

export default envConfig