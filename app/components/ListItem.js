import React from 'react'; 
import {FlatList,View, Text} from 'react-native'; 

import {contacts} from '../../config/data'; 

// class ListContacts extends Component{
// 	render(){
// 		return (
// 			<FlatList
// 				style={{}}
// 				data={contacts}
// 				renderItem= {({item}) => 
// 					<Text>{item.email}</Text> 
// 				}
// 				keyExtractor={(item) => item.email}
// 			>


// 			</FlatList>
// 		)
// 	}
// }


const ListContacts = () => ({
	render(){
		return (
			<FlatList
				style={{}}
				data={contacts}
				renderItem= {({item}) => 
					<Text>{item.email}</Text> 
				}
				keyExtractor={(item) => item.email}
			>


			</FlatList>
		)
	}
})

export default ListContacts; 
