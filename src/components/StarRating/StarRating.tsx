import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Rating} from '../../models/CommonModels';
import {colors} from '../../styles/colors';
import {ImageIcon} from '../ImageIcon/ImageIcon';

const starIcon = require('../../assets/images/star.png');

interface Props {
  rating?: Rating;
}
export function StarRating({rating}: Props) {
  if (!rating?.average) {
    return null;
  }
  return (
    <View
      testID={`star-rating-${rating.average < 5 ? 'bad' : 'good'}`}
      style={styles.content}>
      <ImageIcon testID="starIcon" color={colors.dark} source={starIcon} />
      <Text style={styles.ratingText}> {rating.average}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: colors.dark,
    fontSize: 20,
  },
});
