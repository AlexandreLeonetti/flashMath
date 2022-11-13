import { View, Text, SafeAreaView, Image, TextInput, ScrollView, Button, TouchableOpacity} from "react-native";
import React, { useLayoutEffect ,  Component}  from "react";
import { useNavigation } from "@react-navigation/native";
import FlashClass from './FlashClass'; 
import Parameter from './Parameter';
import Stats from './Stats';
//import './stats.module.css';

const generate = (cnumberOfDigits,clow) => {
		//genrate digits of the concatedStrNumber in the current flash.
		let concatedStrNumber = '';
		for (let i=0; i< parseInt(cnumberOfDigits); i++){
			let min=Math.ceil(clow);
			let randomDigit = Math.floor(Math.random()*(10-min)+min);
			randomDigit !=0 ? concatedStrNumber += String(randomDigit) : i --;
		}
	return concatedStrNumber;
}


class ContainsFlashClass extends Component{
			constructor(props){
				super(props)
				this.state={
						mode   			: "home"			,
						flasher			: false				,
						contentBtn		: "START"			,
						cperiod			: 1200				,
						cnumberOfDigits		: 1				,
						cnumberOfFlashes	: 3				,
						clow			: 6				,
						series			: []				,
						ratio			: []				,
						session			: []
				};
				this.handleNumberOfDigits		=		this.handleNumberOfDigits.bind(this)  		;
				this.handlePeriod			    =		this.handlePeriod.bind(this)          		;
				this.handleNOfFlashes	    	=		this.handleNOfFlashes.bind(this)      		;
				this.handleLow			  	    =		this.handleLow.bind(this)			        ;
				this.handleStartFlashing  		=		this.handleStartFlashing.bind(this)		    ;
				this.handleSeries			    =		this.handleSeries.bind(this)			    ;
				this.handleRatio			    =		this.handleRatio.bind(this)			        ;
				this.handleSession			    =		this.handleSession.bind(this)			    ;
				this.goHome				        =		this.goHome.bind(this)				        ;
				
			}

		handleNumberOfDigits (n){
			this.setState({cnumberOfDigits:n});
		}
		handlePeriod(period){
			this.setState({cperiod:period});
		}

		handleNOfFlashes( NOFlashes){
			this.setState({cnumberOfFlashes:NOFlashes})	;	
		}

		handleLow(Low){
				this.setState({clow:Low});
		}	

		handleRatio(isSuccess){
			let arrRatio = this.state.ratio;
			arrRatio.push(isSuccess);
			this.setState({ratio:arrRatio});
			//this.setState({contentBtn:"Start"});
		}

		handleSession(isSession){
			
			let arrSession = this.state.session;
			arrSession.push(isSession);
			this.setState({session:arrSession});
			this.setState({mode:"stats"});
			this.setState({contentBtn:"START"});
		}

		goHome(){
			console.log("goHome just called")
			console.log(this.state.mode)
			this.setState({mode:"home"})
			this.setState({contentBtn:"START"})
			console.log(this.state.mode);
		}

		handleStartFlashing(){
			console.log("handleStartFlashing just called")
			if(this.state.mode=="flashing"){
			this.setState({mode:"home"});
			/*this.handleSeries();*/
			this.setState({contentBtn:"START"});
			}else if(this.state.mode=="stats"){
			this.handleSeries();
			this.setState({mode:"flashing"});
			this.setState({contentBtn:"Stop Now"});
			}else if(this.state.mode=="home"){
			this.setState({contentBtn:"Stop"});
			this.handleSeries();
			this.setState({mode:"flashing"});
		//	let sessionNow = this.state.session;
		//	this.setState({session:(sessionNow+1)});
//			this.setState({session:(this.state.session+1)})
			}
		}

		
		
		// addRatio = (isSuccess) => {
		// ratio.push(isSuccess)
		// }
		handleSeries(){	
			let arrSeries =  this.state.series;
			for(let i =0; i<this.state.cnumberOfFlashes;i++){
			let x = generate(this.state.cnumberOfDigits,this.state.clow);
			arrSeries[i]=x;
			}
			console.log("master series");
			console.log(arrSeries);
			this.setState({series : arrSeries});
		}

		render(){
		const 
			cperiod			        = this.state.cperiod,
			cnumberOfDigits	        = this.state.cnumberOfDigits,
			cnumberOfFlashes        = this.state.cnumberOfFlashes,
			clow				    = this.state.clow, 
			ratio 			        = this.state.ratio,
			flasher 			    = this.state.flasher,
			session 			    = this.state.session,
			series			        = this.state.series,
			mode 				    = this.state.mode,
			contentBtn 		        = this.state.contentBtn;
		return(
			


		<View	className="  flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto ">
            		<View className="w-full">
				<View className="">
                 			<View className=" w-full "> 

					 {mode=="flashing"&& <>

					 <FlashClass  
							period={cperiod} 
							series={series}
							numberOfFlashes = {cnumberOfFlashes}
							addRatio = {this.handleRatio}
							addSession = {this.handleSession}
						 		cancel= { this.goHome}
					/>
					 
					</>
					 }
					 {mode=="stats"&& <>
					 				<Stats
										ratio={ratio}
										session={session}
										period={cperiod}
									 />
					 				<View className="grid grid-col-1 px-6">
									<TouchableOpacity
										className="mt-10 bg-emerald-400 text-white  font-black w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base" 
										onPress={() => this.handleStartFlashing()}
										title={contentBtn}

																><Text className="text-2xl text-white font-black inline-flex items-center justify-center px-6 py-1">{contentBtn}</Text></TouchableOpacity>

					 				<TouchableOpacity
											className="mt-5 bg-emerald-400 text-white font-black w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base" 
											onPress={() => this.goHome()}
									title="Home"
									><Text className="text-2xl text-white font-black inline-flex items-center justify-center px-6 py-1">HOME</Text></TouchableOpacity>
									</View>
					 				</>
					 } 
		{/*
                  </View>
                   <View className="grid grid-cols-1  ">
		     */}
		   			
					 {mode=="home" && <>
					<View	className=" items-center h-auto">
						 <View className="mt-20 h-48">
         	         				<TouchableOpacity
								className="disk bg-emerald-400 text-4xl  border border-transparent rounded-full h-48 w-48 justify-center items-center shadow-sm text-base" 
								onPress={() => this.handleStartFlashing()}
							><Text className="text-4xl text-white font-black inline-flex ">{contentBtn}</Text></TouchableOpacity>
							 {/*	      <View className="circle bg-emerald-500"></View>
		    							<View className="circle bg-emerald-500 delay1"></View>
									<View className="circle bg-emerald-500 delay2"></View>
									<View className="circle bg-emerald-500 delay3"></View>
									*/}
						</View>
                     </View>
					 <Parameter
						 className="border-b border-gray-100"
						title= {"Number Of Digits"}
						gameValue={cnumberOfDigits}
						onParamChange={this.handleNumberOfDigits}
					/>
					<Parameter
						className="border-b border-gray-100"
						title={"Period"}
						gameValue={cperiod}
						onParamChange={this.handlePeriod}
					/>
					<Parameter
						className="border-b border-gray-100"
						title={"Number Of Times"}
						gameValue={cnumberOfFlashes}
						onParamChange={this.handleNOfFlashes}
					/>
					<Parameter
						title={"Lower Bound"}
						gameValue={clow}
						onParamChange={this.handleLow}
					/>
					{/*
                                        <Link href="/">
                                        <View
						className=" cursor-pointer mt-5 bg-white text-black font-black w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base" 
									>Home
					</View>
                                        </Link>
					*/}
					 </>
					}
                   			</View>
				</View>	
            		</View>
		</View>


      )
	}
}

export default ContainsFlashClass;
