import video1 from './video/a.mp4'
import {forwardRef, useImperativeHandle, useRef} from 'react'



function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, ()=> ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return(
        <video src={video1} width={200}
            ref={videoRef}
        />
    )
}

export default forwardRef(Video)