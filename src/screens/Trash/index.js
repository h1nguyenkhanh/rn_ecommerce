import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, radius} from '../../assets/styles';
import {callCategoriesApi} from '../../apis/categoriesApi';

const Trash = () => {
  const [searchValue, setSearchValue] = useState('asd');

  const productCategory = [
    'Tất cả',
    'Cây trang trí',
    'Cây dây leo',
    'Cây có hoa',
    'Cây để bàn',
    'Cây nội thất',
  ];

  useEffect(() => {
    // callApi();
    callCategoriesApi();
  }, []);

  return (
    <View style={styles.homeMain}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Green Shop</Text>
        </View>
        <View style={styles.headerOption}>
          <View style={styles.searchForm}>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={30} color={colors.mediumGreen} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              onChangeText={setSearchValue}
              value={searchValue}
              placeholder="Tìm kiếm"
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.category}>
          <FlatList
            data={productCategory}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.categoryItem}>
                <Text style={styles.categoryName}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
            horizontal
            style={styles.categoryList}
          />
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default Trash;

const styles = StyleSheet.create({
  homeMain: {
    backgroundColor: colors.lightBlue,
    height: '100%',
  },
  header: {
    paddingHorizontal: 15,
  },
  headerTitle: {
    paddingHorizontal: 5,
  },
  title: {
    color: colors.mediumGreen,
    fontWeight: 'bold',
    fontSize: 25,
  },
  headerOption: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  searchForm: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: radius.medium,
    flex: 1,
    marginRight: 5,
  },
  searchBtn: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  searchInput: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    flex: 1,
    fontSize: 12,
  },
  filterBtn: {
    backgroundColor: colors.mediumGreen,
    justifyContent: 'center',
    borderRadius: radius.medium,
    paddingHorizontal: 5,
    marginLeft: 5,
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryItem: {
    marginRight: 20,
  },
  categoryName: {
    fontSize: 12,
    color: '#797979',
  },
});
