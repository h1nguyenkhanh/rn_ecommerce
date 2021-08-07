import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vapi.vnappmob.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getProvince() {
  try {
    const {data} = await axiosInstance.get('/province');
    return data.results;
  } catch (error) {
    throw error;
  }
}

async function getDistrict(provinceId) {
  try {
    const {data} = await axiosInstance.get(`/province/district/${provinceId}`);
    return data.results;
  } catch (error) {
    throw error;
  }
}

async function getWard(districtId) {
  try {
    const {data} = await axiosInstance.get(`/province/ward/${districtId}`);
    return data.results;
  } catch (error) {
    throw error;
  }
}

const addressApi = {
  getProvince,
  getDistrict,
  getWard,
};

export default addressApi;
