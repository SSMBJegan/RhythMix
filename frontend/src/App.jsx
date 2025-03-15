import { useContext } from "react";
import Display from "./components/DIsplay";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";

 
export default function App() {
const {audioRef,track} = useContext(PlayerContext);
 //new change
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
         <Sidebar/>
         <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}
