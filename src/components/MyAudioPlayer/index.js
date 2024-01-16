import ReactPlayer from 'react-player';
const myAudioPlayer = () => {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4xDzrJKXOOY"
        playing
        muted
        height={0}
        width={0}
        style={{ display: 'none' }}
      />
    );
  };

  export default myAudioPlayer;