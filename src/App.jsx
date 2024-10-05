
import Eddy from "./components/hello";
import SideBar from "./component/sidebar";
import MusicPlayer from "./component/vlc"
import Counter from "./components/counter"
import Approutes from "./routes/route";
const App = ()=>{

  const person = [

    "John","frank" ,"eddy" ,"mere", 
    "darling" , "mom","arsene" ,
    "chlomi" , "yesaya" , "pazzo",
    "John","frank" ,"eddy" ,"mere", 
    "darling" , "mom","arsene" ,
    "chlomi" , "yesaya" , "pazzo",
    "John","frank" ,"eddy" ,"mere", 
    "darling" , "mom","arsene" ,
    "chlomi" , "yesaya" , "pazzo", 
    "John","frank" ,"eddy" ,"mere" ,
    "darling" , "mom","arsene" ,
    "chlomi" , "yesaya" , "pazzo"
  ];
  <Approutes />
return(
 
  <>
  
  <MusicPlayer />
  <Counter />
  <details>
    <summary className="ml-5 mt-5">This is the list of the student </summary>
    <Eddy student={person.map(( name , index)=>{
      return (
        <>
        <p key={index}>{index} : {name}</p>
        </>
      )
    })} />

  </details>

  </>
  
)

}

export default App;