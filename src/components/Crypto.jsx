import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView,View,Text} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';



const ListHeader = () => (
    <>
      <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
      <View style={styles.divider} />
    </>
  )
const Crypto = ({ data, dispatch }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_MARKET_DATA' });
    }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  data: state.market.data,
});

export default connect(mapStateToProps)(Crypto);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});