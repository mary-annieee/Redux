import React, {useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView,View,Text} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';
import ListHeader from '../components/ListHeader';
import { fetchMarketData ,deleteListItem} from '../context/actions/marketAction';
import Swipeout from 'react-native-swipeout';
import { refreshMarketData } from '../context/actions/marketAction';


function Crypto({data, fetchMarketData, deleteListItem,isLoading }) {

  useEffect(() => {
    fetchMarketData();
  }, [fetchMarketData]);

  const handleDelete = (itemId) => {
    deleteListItem(itemId);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ListHeader />
      {isLoading ? ( 
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      ) : (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => (
          <Swipeout
          right={[
            {
              text: 'Delete',
              backgroundColor: 'red',
              onPress: () => handleDelete(item.id),
            },
          ]}
        >
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
          />
          </Swipeout>

        )}
      />
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    data: state.market.data,
    isLoading: state.market.isLoading,
   
  };
};
const mapDispatchToProps = {
  fetchMarketData,
  deleteListItem,
  refreshMarketData, 
};
export default connect(mapStateToProps,mapDispatchToProps)(Crypto);

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});