import { View, Text ,StyleSheet, SafeAreaView,Image, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router';
import imagesPath from '@/src/constants/imagesPath';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const AuthMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  let navigate_to_welcome = () => {
     router.push('/(auth)/termsCondition');
     setIsLoading(false);
  }
  let loading_timeOut = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome,3000)
  }
  
  useEffect(() => {
    setTimeout(loading_timeOut, 2000);
  },[]);
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
     </View>
     <View style={styles.body}>
      <Image source={imagesPath.logo} 
      style = {styles.logo_style}
      resizeMode='contain'
     />
      <Text style = {styles.header_text}>Whatsapp</Text>
    </View>
     <View style={styles.footer}>
      {
        isLoading ?(
          <>
           <ActivityIndicator
            size = {moderateScale(30)}
            color = {'#0CCC83'}/>
             <Text style = {styles.loading_text}> Loading...</Text>
          </>
        ) : 
        (
          <>
          <Text style = {styles.from_text}>Made with ❤️</Text>
          <Text style = {styles.dev_text}>by Vikalp Chaurasia</Text>
          </>
        )

      }
     </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'space-between',
     alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding : verticalScale(50),
  },
  header:{},
  body:{
    alignItems: 'center',
    gap: verticalScale(10),
  },
  footer:{
    alignItems: 'center',
    height: verticalScale(60),
    justifyContent: 'flex-end',

  },
  from_text:{
    fontSize: moderateScale(12),
    color: 'black',
  },
  dev_text:{
    fontSize: moderateScale(15),
    color: 'black',
    fontWeight: 'bold',
  },
  logo_style:{
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
    },
    header_text:{
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      color: 'black',
    },
    loading_text:{
      fontSize: moderateScale(12),
      color: '#00A884',
      fontWeight: 'bold',
      marginTop: verticalScale(10),
    },
})
export default AuthMain

