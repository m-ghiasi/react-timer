import { useEffect , useState } from "react"
export default function Time(){

   
    const [seconds , setSeconds] = useState(0);
    const [isRunning , setIsRunning] = useState(true)



    const resetTimer = ()=>{
        setSeconds(0)
    }


    const startStopTimer = ()=>{
        setIsRunning(!isRunning)
    }


    useEffect(()=>{
        let interval;


        if(isRunning){
            interval = setInterval(()=>{
                setSeconds(prevSeconds => prevSeconds+1);
            },1000);

        } else {
            clearInterval(interval);
        }
         
        return ()=> clearInterval(interval)
    },[isRunning])


    return(
        <div>
            <h1>Timer : {seconds}S</h1>
            <button onClick={startStopTimer}>start Stop Timer</button>

            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}