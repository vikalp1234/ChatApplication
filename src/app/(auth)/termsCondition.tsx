import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


const termsCondition = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>termsCondition</Text>
      <Link href="/login">termsCondition</Link>
    </View>
  )
}

export default termsCondition 