import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const verifyOtp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>verifyOtp</Text>
      <Link href="/termsCondition">Login</Link>
    </View>
  )
}

export default verifyOtp