import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
	isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle size={50} className='text-green-500' onClick={handlePause} />
	) : (
		<FaPlayCircle size={50} className='text-green-500' onClick={handlePlay} />
	);

export default PlayPause;
