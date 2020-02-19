import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import colors from '../utils/colors';
import ListRow from '../components/ListRow';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {getData} from '../redux/actions/getDataAction';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
});

function ItemList(props) {
  
  const [searchText, setsearchText] = useState("");
  const [filteredData , setfilteredData] = useState([]);
  const [clearText, setclearText] = useState(false)
  
  
  useEffect(() => {
    props.getData();
  },[]);
  

  const search = (Text) => {
    setclearText(false)
    setsearchText(Text);
    const newData = props.data.data.filter(item => {
      return item.title.toLowerCase().match(Text);
    })
    setfilteredData(newData);
  };

  const clearSearchText = () => {
    setclearText(true);
    search();
  }

  const renderHeader = () => {
    //searchbar to search or filter list
    return  (
      <View style={{display:'flex', flexDirection:"row", alignItems:'center', justifyContent:'space-around', backgroundColor:colors.light_grey , borderRadius:100,  margin:10, paddingHorizontal:20}}>
         <Icon
            name="search"
            size={15}
            color={colors.slateGrey}
          />
        <TextInput
            style={{ width:'90%', fontSize:15}}
            placeholder="Search..... "
            placeholderTextColor={colors.slateGrey}
            autoCapitalize="none"
            value={!clearText ? searchText : null}
            scrollEnabled={false}
            underlineColorAndroid="transparent"
            accessible
            blurOnSubmit
            onChangeText={Text => search(Text)}
            
        />
        <TouchableOpacity onPress={clearSearchText}>
            <Icon  size={15} name="close" color={colors.slateGrey} />
        </TouchableOpacity>
     </View>
     )};

  const [cart, setCart] = useState([]);

  const renderFooter = () => {
    //Setting loadmore activityindicator
    return (       
      <View style={{ flexDirection:'row', margin:10,justifyContent:'space-around', alignItems:'center', backgroundColor:'transparent'}}>
        <Button onPress={() => setCart(selected(props.id))} title="Add to cart" color={colors.red}  />
        <Button title="show cart" color={colors.royal_blue}/>
        
      </View>           
     )
  }


    if (props.loading) {
      //Loading View while data is loading
      return (
        <SafeAreaView style={{ flex:1, alignSelf:'center', justifyContent:"space-evenly" }}>
          <ActivityIndicator animating size="large" color={colors.royal_blue} />
        </SafeAreaView>
      );
    }
 
        return(
          //load view when getdata
        
              <SafeAreaView style={styles.container}>
                {renderHeader()}
                    <FlatList
                      // data={this.props.data.data!==undefined? this.props.data.data :[] }
                      data={props.data.data 
                        && filteredData.length > 0 ? filteredData : props.data.data}
                      renderItem={({ item }) => 
                      // <TouchableOpacity 
                      // onPress={() => props.navigation.navigate('DetailView',{   //pasing params through props navigation
                      //   title: item.title,
                      //   description: item.slug,
                      //   image_url: item.images.downsized_still.url
                      // })}
                      // >
                            <ListRow
                                title={item.title}
                                description={item.slug}
                                image_url={item.images.downsized_still.url}
                                key={item.id}
                                
                            />
                      // </TouchableOpacity>
                            }
                            keyExtractor={item => `item-${item.id}`}

                        />
                        {/* {renderFooter()} */}
              </SafeAreaView>
        )
}     

const mapStateToProps = state =>({
  data: state.data,
  loading: state.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  getData
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ItemList));