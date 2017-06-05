import React from 'react'; 
import {
	View, 
	Text,
	TouchableOpacity,
} from 'react-native'; 


import ListContacts from './ListItem'; 

	const Main = () => ({
		render(){
		return (

			<View> 
				<ListContacts /> 
			</View> 
		)
	}
	})

//  class Main extends  Component{
// 	render(){
// 		return (

// 			<View> 
// 				<ListContacts /> 
// 			</View> 
// 		)
// 	}
// }

export default Main; 
