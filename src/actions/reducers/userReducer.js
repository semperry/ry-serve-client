const userReducer = (state, action) => {
	switch (action.type) {
		case "setUser":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default userReducer;
