const useGetQueryParams = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);

	return params;
};

export default useGetQueryParams;
