import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {getCategoriesRequest} from '../../redux/actions/categoriesAction';

const Home = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector(state => state.categories.data);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  console.log('home', categoriesData);
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
