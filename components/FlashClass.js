import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Button} from "react-native"
import { Audio }  from "expo-av";
import Flashes from "./Flashes";




const between = "";

function Marvelous(props){
      return <Text className="marvelous"> Marvelous !</Text>;
}
class Flash extends Component {
      constructor(props){
            super(props);
            this.state = {
                  ith               :   0        ,
                  concatedStrNumber :   ""       ,
                  sumOfSerie        :   0        ,
                  flashing          :   true     ,
                  succeeded         :   false    ,
                  cflash            :   ""       ,
                  cresult           :   ""
            };
            this.check = this.check.bind(this);
      }


      componentDidMount(){
      }


      stopFlasher = () =>{
		this.setState({flashing:false});
            console.log("stopFlasher flashing is false");
      }

      componentWillUnmount(){
            this.stopFlasher();

            console.log("FlashClass Will unmount");
            
            if(this.state.succeeded!==true){
                  //this.props.addSession("session");
            }
      }
      setCresult(){

		this.setState({cresult:value});
	      check(this.state.cresult)

      }
      check  (e) {
	      console.log("checking")
	      console.log(e)
            let sumOfSerie = 0
            for(let i=0; i<this.props.numberOfFlashes; i++){
                   sumOfSerie += parseInt(this.props.series[i]);
            }

            this.setState({cresult:e});

            if(parseInt(e)==parseInt(sumOfSerie)){
                  //this.setState({cflash:"Marvelous !"});
                  this.setState({succeeded:true});
                  this.props.addRatio("success");
                  this.props.addSession("session");
            }else{
                  //this.props.addSession("session");
                  //this.props.rato("sucess",props.series);
            }
      }
      

    render(){ 
            const flashing = this.state.flashing;
            const succeeded = this.state.succeeded;
            return(
                  <>
                     {flashing && <>
					<Flashes
						isFlashing={flashing}
			     			number={this.state.cflash}
			     			series={this.props.series}	
			     			period={this.props.period}
			     			cancel={this.props.cancel}
			     			endFla={this.stopFlasher}
			     			
			     		/>
                      </>
                     }
                      {!flashing && !succeeded && <> 
                       <View className="justify-center h-screen h-full w-full bg-zinc-50 items-center">
				      <View className="w-full">
                             <Text className="block text-xl py-5 text-center text-black font-black">Enter Result : </Text>
				      </View>
				      <View className="w-full px-6">
            		     <TextInput keyboardType ='number' 
                                 className="py-3 px-3 block w-full border-black rounded-xl shadow-sm focus:outline-none border-2 border-emerald-400  w-full "
                                 autoFocus={true}
			                     keyboardType="numeric"
             		             value={this.state.cresult} 
                                 onChangeText={(value) => this.check(value)} 
                           />
				      </View>
                                <View className="px-6 w-full">

                     <TouchableOpacity className="bg-gray-300 w-full  mt-20  inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md "
                             onPress={() => this.props.cancel()}
                                     ><Text className="text-white font-black">CANCEL</Text></TouchableOpacity>
            	    </View>
           	    </View>
		</>
                     }
                     {/*succeeded && <Marvelous/>*/}
                  </>
            )
      }
}

export default Flash;
