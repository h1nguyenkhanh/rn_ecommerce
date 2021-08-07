import {generateKeywords} from 'utils';
import firestore from '@react-native-firebase/firestore';

async function get(userId) {
  try {
    const doc = await firestore.collection('users').doc(userId).get();
    if (doc.exists) {
      return {id: doc.id, ...doc.data()};
    } else {
      throw new Error('Không tìm thấy dữ liệu');
    }
  } catch (error) {
    throw error;
  }
}

async function getAll() {
  try {
    const querySnapshot = await firestore
      .collection('users')
      .orderBy('createdDate', 'asc')
      .get();
    let data = [];
    querySnapshot.forEach(documentSnapshot => {
      data.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });
    return data;
  } catch (error) {
    throw error;
  }
}

async function update(userData) {
  try {
    userData.updatedDate = firestore.FieldValue.serverTimestamp();
    userData.keywords = generateKeywords(userData.name);
    delete userData.createdDate;
    const email = userData.email;
    delete userData.email;

    const response = await firestore
      .collection('users')
      .doc(userData.id)
      .update(userData);
    userData.email = email;
    return userData;
  } catch (error) {
    throw error;
  }
}

async function updateField({id, field, value}) {
  try {
    await firestore
      .collection('users')
      .doc(id)
      .update({
        [field]: value,
      });
  } catch (error) {
    throw error;
  }
}

const usersApi = {
  get,
  update,
  getAll,
  updateField,
};

export default usersApi;
