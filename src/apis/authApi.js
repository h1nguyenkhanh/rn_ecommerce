import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

async function signin(email, password) {
  try {
    const {user} = await auth.signInWithEmailAndPassword(email, password);
    const userInfo = await firestore.collection('users').doc(user.uid).get();

    return {
      id: userInfo.id,
      ...userInfo.data(),
    };
  } catch (error) {
    throw error;
  }
}

async function signup(userInfo) {
  try {
    const {email, password} = userInfo;
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    const {additionalUserInfo, user} = userCredential;

    if (additionalUserInfo.isNewUser) {
      delete userInfo.password;
      userInfo.createdDate = firestore.FieldValue.serverTimestamp();
      userInfo.role = 'customer';
      await firestore.collection('users').doc(user.uid).set(userInfo);
      userInfo.id = user.uid;
    }

    return userInfo;
  } catch (error) {
    throw error;
  }
}

const authApi = {
  signin,
  signup,
};

export default authApi;
