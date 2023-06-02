import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dropDownData } from './src/assets/database/dropDownData'
import { RFPercentage } from 'react-native-responsive-fontsize'

const App = () => {

  return (
    <View style={{ flex: 1, marginBottom: RFPercentage(1) }}>
      <Text style={{ fontSize: RFPercentage(3), textAlign: 'center', fontWeight: '800', marginBottom: RFPercentage(1) }}>App</Text>
      {/* <FlatList
        style={{ padding: RFPercentage(2), borderWidth: 2, margin: 5 }}
        data={dropDownData}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({ item, index }) => {
            return (
              <View style={styles.itemContainer}>
                <Text>Description: {item.description}</Text>
                <Text>statusCode: {item.statusCode}</Text>
                <FlatList
                  style={{ padding: RFPercentage(1), borderWidth: 1 }}
                  data={item.subStatuses}
                  showsVerticalScrollIndicator={false}
                  renderItem={
                    ({ item: sub, index: subIndex }) => {
                    return (
                      <TouchableOpacity style={[styles.itemContainer, { backgroundColor: 'yellow' }]} onPress={() => {
                        console.log('statusCode: ', item.statusCode, ' & subStatusCode: ', sub.subStatusCode);
                      }}>
                        <Text>Description: {sub.description}</Text>
                        <Text>subStatusCode: {sub.subStatusCode}</Text>
                        <FlatList
                        />
                      </TouchableOpacity>
                    )
                  }}
                />
              </View>
            )
          }}
      /> */}

      {
        dropDownData.map((item, index) => {
          return (
            <View style={styles.itemContainer} key={index}>
              <Text>Description: {item.description}</Text>
              <Text>statusCode: {item.statusCode}</Text>
              {
                item.subStatuses.map((sub, subIndex) => {
                  return (
                    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: 'yellow' }]} onPress={() => {
                      console.log('statusCode: ', item.statusCode, ' & subStatusCode: ', sub.subStatusCode);
                    }}>
                      <Text>Description: {sub.description}</Text>
                      <Text>subStatusCode: {sub.subStatusCode}</Text>
                      <FlatList
                      />
                    </TouchableOpacity>
                  )
                })
              }
              {/* <FlatList
                style={{ padding: RFPercentage(1), borderWidth: 1 }}
                data={item.subStatuses}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: sub, index: subIndex }) => {
                  return (
                    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: 'yellow' }]} onPress={() => {
                      console.log('statusCode: ', item.statusCode, ' & subStatusCode: ', sub.subStatusCode);
                    }}>
                      <Text>Description: {sub.description}</Text>
                      <Text>subStatusCode: {sub.subStatusCode}</Text>
                      <FlatList
                      />
                    </TouchableOpacity>
                  )
                }}
              /> */}
            </View>
          )
        })}

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: RFPercentage(1)
  }
})
