
import {useRef, useEffect} from 'react'
// useImperativeHandle giúp tùy chỉnh được ref của một func component
import Video from './video' 

function Content() {

    const videoRef = useRef()
    
    useEffect(() => {
        console.log(videoRef.current);
    })

    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }
    return(

        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>play</button>
            <button onClick={handlePause}>pause</button>

        </div>
    )
}

export default Content