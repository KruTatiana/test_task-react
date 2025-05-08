import { Fragment } from "react/jsx-runtime"
import ReactPlayer from "react-player/youtube"

export const VideoComponent = () => {
  return (
    <Fragment>
      <ReactPlayer 
        light
        url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        width={"100%"}
        height={"320px"}
        playing
      />
    </Fragment>
  )
}