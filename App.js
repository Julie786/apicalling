import React,{useEffect,useState} from 'react';
import {SafeAreaView,FlatList,View,ActivityIndicator,Text,Button,TouchableOpacity,StyleSheet, ScrollView} from 'react-native'; 
import { getCats } from './utils/BLayer';


const App = (props) =>{
const [count, setcount] = useState(0);
const [loading, setLoading] = useState(true);
const [data,setData] = useState(null); 
useEffect(() => {
  try {
    (async()=>{
      setLoading(true)
let response =await getCats();
let result=await response.json();
setData(result);
console.log("result : ", result)
setLoading(false)
    })();
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
},[]);
return(
  <View style={styles.container}>
    <>
    {loading?
    <View style= {{justifyContent: 'center', flex:1}}>
          <ActivityIndicator color = '#00ff00'size = 'large'/> 
    </View>
    :
        <FlatList
        data={data}
        renderItem={({item,index})=>(
          <View style={styles.box}>
          <View style= {styles.rowContainer}> 
            <View style={styles.titleContainer}><Text style={styles.textStyle}>Id: </Text></View>
            <View style={styles.dataContainer}><Text style = {{color: item._id==="5894af975cdc7400113ef7f9"? 'skyblue' : 'black'}}>{item._id} </Text></View>
          </View>
          <View style= {[styles.rowContainer, {height: '40%'}]}> 
            <View style={styles.titleContainer}><Text style={styles.textStyle}>Text: </Text></View>
            <View style={styles.dataContainer}><ScrollView><Text>{item.text }</Text></ScrollView></View>
          </View>
          <View style= {styles.rowContainer}> 
            <View style={styles.titleContainer}><Text style={styles.textStyle}>Date: </Text></View>
            <View style={styles.dataContainer}><Text>{new Date(item.updatedAt).toLocaleDateString()}</Text></View>
          </View>
          <View style= {styles.rowContainer}> 
            <View style={styles.titleContainer}><Text style={styles.textStyle}>Verified: </Text></View>
            <View style={styles.dataContainer}><Text style={{color: 'blue', fontWeight: 'bold'}}>{item.status.verified.toString()} </Text></View>
          </View> 
        </View>
        )}
         />
}</>
  </View>
);
};
export default App;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: '5%',
    flex:1,
    paddingTop: '10%',
  },
  box:{
    height: 120,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    marginVertical:2
  },
  titleContainer:{
    width: '30%' , 
   // backgroundColor: 'powderblue', 
  },
  dataContainer:{
    width: '70%' , 
    //backgroundColor: 'skyblue'
  },
textStyle: {
  fontWeight: 'bold'
},
rowContainer: {
  justifyContent: 'space-between' , 
  flexDirection: 'row',
 // marginVertical: '0.5%',
  height: '20%',
},
});