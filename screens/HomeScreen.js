
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect }  from "react";
import { useNavigation } from "@react-navigation/native";
import {
	UserIcon,
	ChevronDownIcon,
	SearchIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";


import Trainer from '../components/Trainer'

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			
			headerTitle:"TESTING",
			headerShown:false,
		})
	}, [])

	return (
		<SafeAreaView className="bg-zinc-50">
				{/*Header*/}
				{/* Math */}

	<View className="">
	  	<View className=" bg-zinc-50 mx-auto h-full">
			{/*Train*/}
			<Trainer/>
     		</View>
	</View>



				{/* Body */}

		</SafeAreaView>
	);
};


export default HomeScreen;
