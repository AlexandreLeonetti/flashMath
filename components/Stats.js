import React from 'react';
import { View, TouchableOpacity, Text} from "react-native";

function Stats (props){
		const ratio =props.ratio.length+"/"+(props.session.length ) ;
        const percents = (100*props.ratio.length/(props.session.length)).toFixed(2);
	return(
		<View className="">


                                      <View   className=" mt-10 inline-flex items-center justify-center">
		                                                 <View className="py-10 inline-flex items-center justify-center">
		                                        <TouchableOpacity
		                                                                className="disk w-48 h-48 items-center justify-center  bg-emerald-400 text-4xl  border border-transparent rounded-full shadow-sm "
		                                                        ><Text className="text-2xl   text-white font-black ">CORRECT !</Text></TouchableOpacity>
		               		                 </View>
		                     </View>

			<View className=" innerStats ">
			<View className="text-sm">
				<View className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3 ">
					<Text className="col-span-1" >Score </Text>
					<Text className="col-span-1 text-right"> {ratio}</Text> 
				</View>
				<View className="h-12 grid grid-cols-2 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<Text>Ratio </Text>
					<Text className="text-right">{percents} %</Text>
				</View>
				<View className="grid grid-cols-2 h-12 mx-6 border-b border-gray-200 dark:border-gray-700 py-3">
					<Text>Speed in numbers/min</Text>
					<Text className="text-right"> {60/(props.period/1000)} </Text>
				</View>
			</View>
			</View>
		</View>
	)
}

export default Stats;
