import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors} from '../assets/styles';

const Stars = ({starNumber, size}) => {
  function renderStars(length = 5) {
    let starsList = [];
    for (let i = 1; i <= 5; i++) {
      let starItem;

      if (length) {
        starItem = (
          <Icons
            name="star"
            size={size ? 25 : 15}
            style={styles.icons}
            key={i}
          />
        );
      } else {
        starItem = (
          <Icons
            name="star-o"
            size={size ? 25 : 15}
            style={styles.icons}
            key={i}
          />
        );
      }
      starsList.push(starItem);
      if (length) {
        --length;
      }
    }
    return starsList;
  }
  return <View style={styles.starWrapper}>{renderStars(starNumber)}</View>;
};

export default Stars;

const styles = StyleSheet.create({
  starWrapper: {
    flexDirection: 'row',
  },
  icons: {
    marginRight: 5,
    color: colors.orange1,
  },
});
