import firestore from '@react-native-firebase/firestore';

async function get() {
  const querySnapshot = await firestore().collection('categories').get();
  let data = [];
  querySnapshot.forEach(documentSnapshot => {
    data.push({
      id: documentSnapshot.id,
      ...documentSnapshot.data(),
    });
  });
  return data;
}

const categoriesApi = {
  get,
};

export default categoriesApi;
