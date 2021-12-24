import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTracking = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.localStorage.setItem("lastPath", pathname);
	}, [pathname]);
};

export default useTracking;
