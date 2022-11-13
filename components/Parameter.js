import React , {useState, useEffect} from 'react'
import {View, Text, TextInput } from "react-native"

const Parameter = ({className, title, onParamChange, gameValue} = props ) =>  {
        const [param, setParam] = useState(gameValue);
       useEffect(() => {

           console.log("useEffect param");
           console.log("gameValue "+gameValue.toString());
           console.log("hook param "+param);
           onParamChange(parseInt(param));
       },[param]);
    return (
          <>
            		<View className={`mx-6 flex-row  rounded-md my-1  ${className}`}>
                  		<Text className=" text-gray-600 font-extrabold block text-xs font-medium mt-1 ">{title}</Text>
                  		<TextInput className=" flex-1 focus:outline-none text-right text-base text-gray-700 font-bold rounded-md" 
		            			value={param}
				            	onChangeText={(value) => setParam(value)}
					            placeholder={gameValue.toString()}
                                keyboardType="numeric"
                  		/>
            		</View>
            	</>


    )
}
		
export default Parameter;
