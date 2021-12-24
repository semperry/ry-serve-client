import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const excludedRoutes = ["/", "/login", "/not-found"];

const useTracking = (prev) => {
	const { pathname } = useLocation();
	const prevRef = useRef(prev);

	useEffect(() => {
		if (!excludedRoutes.includes(pathname))
			window.localStorage.setItem("lastPath", prevRef.current || pathname);
		prevRef.current = null;
	}, [pathname]);
};

export default useTracking;
