/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import SplashScreen from './splashScreen/splashScreen'
import AuthContainer from './AuthContainer/authContainer'

class App extends Component{
	render(){
		return(
			<SplashScreen logo={require('./../assets/logo/Brenda-Logo.png')} duration={1000} backgroundColor={styles.splashScreenContainer}>
				<AuthContainer>

				</AuthContainer>
			</SplashScreen>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	splashScreenContainer: {
		backgroundColor:'#e91e63'
	}
});

export default App;