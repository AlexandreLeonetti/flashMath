import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import { Audio } from "expo-av"




const Flashes = ({  series, period, cancel, endFla} = props) => {

 	let time = new Date().toLocaleTimeString();
 	const  [ctime, setCtime] = useState(time);
	const  [sound, setSound] = React.useState();
	const  [cflash,setFlash] = React.useState();
	const  [ith,   setIth  ] = React.useState(0);
	const  [displayed, setDisplayed] = React.useState();

    async function playSound() {
		const { sound } = await Audio.Sound.createAsync(require ('../assets/bip96ms.wav'));
		setSound(sound);

                console.log('playSound()');
                await sound.playAsync();
	}

    React.useEffect(() => {
        console.log("rendering");
        var counter =0;
		const updateFlash   = setInterval(() => {
            console.log(counter);
	       	let currentVal= series[counter];
			setFlash(currentVal);
			playSound();
			setDisplayed(currentVal);
	  		setTimeout(() => {
				setDisplayed("")
			},period*1/3);

            counter++;
            if(counter==series.length){
	        			setTimeout(() =>{
							endFla()
					},(period*1/3));
            }
	 	},period);

		return () => {
		                	clearInterval(updateFlash);
                            console.log("updateFlash interval cleared");
                            						
		};

  	},[]);


  return(
    <View className="bg-gray-800 h-screen h-full justify-center">
      	<View className="bg-gray-800 w-full" >
		    <Text className=" betweenVoid text-white text-9xl h-48 text-center font-extrabold ">{displayed}</Text>
    	</View>
        <View className="px-6">
	        <TouchableOpacity className="bg-gray-700 w-full  mt-5  inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base "
		     onPress={() => cancel()}
	        >
                <Text className="text-gray-600 font-black">CANCEL</Text>
	        </TouchableOpacity>
	    </View>
    </View>
  )

}

export default Flashes;

