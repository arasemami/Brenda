/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

class SplashScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			done: false
		}
	}

	timer() {
		setTimeout(()=>{
			this.setState({
				done: true
			});
		},this.props.duration || 1000)
	}
	componentDidMount(){
		this.timer();
	}
	render(){
		return(
			this.state.done ?
				// If done -> Show all nested
				({...this.props.children})
				:
				// Display Splash Screen
				(<View style={[styles.container, this.props.backgroundColor]}>
					<Image style={styles.logo} source={this.props.logo}/>
				</View>)

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection:'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width:300,
		height:300
	}
});

export default SplashScreen