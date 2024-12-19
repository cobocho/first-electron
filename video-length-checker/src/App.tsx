import './App.css';
import { Input } from './components/ui/input';

function App() {
	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!files) return;

		const file = files[0];

		const filePath = file.path;

		window.ipcRenderer.invoke('video:submit', filePath);
	};
	return (
		<div>
			<p className="read-the-docs">Video Info</p>
			<Input
				onChange={handleChange}
				type="file"
				accept="video/*"
				className="cursor-pointer"
			></Input>
		</div>
	);
}

export default App;
