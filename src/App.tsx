import { Provider } from 'react-redux';
import MyRouter from './routes';
import { store } from './ReduxStore/store';

function App() {

	return (
		<Provider store={store}>
			<MyRouter />
		</Provider>
	)
}

export default App
