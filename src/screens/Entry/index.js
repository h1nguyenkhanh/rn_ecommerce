import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoriesRequest} from '../../redux/actions/categoriesAction';

const Entry = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  return <>{props.children}</>;
};

export default Entry;
