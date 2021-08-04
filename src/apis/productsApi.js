import firestore from '@react-native-firebase/firestore';

async function get() {
  try {
    const querySnapshot = await firestore().collection('products').get();
    let data = [];
    querySnapshot.forEach(documentSnapshot => {
      data.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function create(productsData) {
  try {
    productsData.createdDate = firestore.FieldValue.serverTimestamp();

    const response = await firestore().collection('products').add(productsData);
    console.log('action response', response);
  } catch (error) {
    console.log('action errror', error);

    throw error;
  }
}

const productsApi = {
  get,
  create,
};

export default productsApi;
