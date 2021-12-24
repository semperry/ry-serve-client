import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const excludedRoutes = ["/", "/login", "/not-found"];

const useTracking = (prev) => {
	const { pathname } = useLocation();

	useEffect(() => {
		if (!excludedRoutes.includes(pathname))
			window.localStorage.setItem("lastPath", prev || pathname);
		prev = null;
	}, [pathname]);
};

export default useTracking;
