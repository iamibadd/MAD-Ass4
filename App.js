import React from "react";
import AppContainer from "./Components/Navigation";
import UserProvider from "./Components/ContextApi";

const App = () =>
	<UserProvider>
		<AppContainer/>
	</UserProvider>;


export default App;