const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			desires: [

			]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// Adds desires to desires page
			editDesires: (desire) => {
				let found = getStore().desires.find(item => item.name == desire.name)
				if (found) {
					let newArray = getStore().desires.filter(item => item.name != desire.name)
					setStore({
						desires: newArray
					});
				} else {
					let newArray = getStore().desires
					setStore({
						desires: [...newArray, desire]
					});
				}
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
