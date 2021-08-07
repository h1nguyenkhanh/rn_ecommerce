import firestore from '@react-native-firebase/firestore';

async function create(orderData) {
  try {
    const docRef = firestore.collection('orders').doc();
    orderData.id = docRef.id;
    orderData.createdDate = firestore.FieldValue.serverTimestamp();
    const response = await docRef.set(orderData);

    return response;
  } catch (error) {
    throw error;
  }
}

async function getUserOrders(userId) {
  try {
    const querySnapshot = await firestore
      .collection('orders')
      .where('userId', '==', userId)
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

async function remove(orderId) {
  try {
    await firestore.collection('orders').doc(orderId).delete();
  } catch (error) {
    throw error;
  }
}

async function update(orderData) {
  try {
    const id = orderData.id;
    delete orderData.id;
    orderData.updatedDate = firestore.FieldValue.serverTimestamp();
    const response = await firestore
      .collection('orders')
      .doc(id)
      .update(orderData);

    return response;
  } catch (error) {
    throw error;
  }
}

async function getAll() {
  try {
    const querySnapshot = await firestore
      .collection('orders')
      .orderBy('createdDate', 'desc')
      .get();
    let data = [];
    querySnapshot.forEach(documentSnapshot => {
      data.push({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      });
    });
    console.log('data', data);
    return data;
  } catch (error) {
    throw error;
  }
}

const ordersApi = {
  create,
  getUserOrders,
  remove,
  update,
  getAll,
};

export default ordersApi;
