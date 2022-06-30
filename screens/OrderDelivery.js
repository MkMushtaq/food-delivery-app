import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, icons, FONTS, images} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  function renderHeader() {
    let myvar = route.params;
    const [titleText, setTitleText] = React.useState("Bird's Nest");

    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 2,
              marginRight: SIZES.padding * 2,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}>
            <Text style={{...FONTS.h3}}>Thank you for ordering</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderOrderAgain() {
    return (
      <View
        style={{
          padding: SIZES.padding * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h2, marginBottom: SIZES.padding * 2}}>
          {' '}
          You are All Set!
        </Text>
        <Text style={{...FONTS.h2, marginBottom: SIZES.padding * 3}}>
          {' '}
          Your order is on the way...
        </Text>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.9,
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            borderRadius: SIZES.radius,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Order Again?</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderOrderAgain()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default OrderDelivery;
