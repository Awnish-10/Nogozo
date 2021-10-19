import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import Classes from './components/Classes';
import FeaturedNovel from './components/FeaturedNovel';
import LatestNovel from './components/LatestNovel';
import Menubar from './components/Menubar';
import MenuStatus from './components/MenuStatus';
import Neet from './components/Neet';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Slider2 from './components/Slider2';

function App() {
	const [menu, setMenu] = useState(false);
	return (
		<div className='App'>
			<Menubar slideMenu={setMenu} />

			<SearchBar />
			{menu && <MenuStatus slideMenu={setMenu} />}

			<Slider />
			<Classes />
			<Slider2 />
			<LatestNovel />
			<FeaturedNovel />
			<Neet />
		</div>
	);
}

export default App;
