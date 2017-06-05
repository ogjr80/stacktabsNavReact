import React, {Component} from 'react'; 
import {View,Text,Button} from 'react-native'; 
import {StackNavigator, TabNavigator} from 'react-navigation'; 

import Main from '../app/components/Main'; 
import Profile from '../app/components/Profile'; 
import Accounts from '../app/components/Accounts'; 
import Settings from '../app/components/Accounts'; 


const MainStacks = StackNavigator({
	Main: {
		screen: Main,
		navigationOptions: {
			title: 'Main'
		}
	}, 
	
}); 


const ProfileStacks = StackNavigator({
	Profile: {
		screen: Profile, 
		navigationOptions: {
			title: 'Profile',
		}
	}
})


const AccountsStack = StackNavigator({
	Profile: {
		screen: Accounts, 
		navigationOptions: {
			title: 'Accounts',
		}
	}
})

const SettingsStacks = StackNavigator({
	Profile: {
		screen: Settings, 
		navigationOptions: {
			title: 'Settings',
		}
	}
})



const TabsMenu  = TabNavigator({
	Stores: {
		screen: MainStacks
	}, 
	Profile: {
		screen: ProfileStacks
	},
	Accounts: {
		screen: AccountsStack, 
	}, 
	Settings: {
		screen: SettingsStacks,
	}

})

//export default MainStacks; 
export default TabsMenu; 
