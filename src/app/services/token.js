import api from "../core/configs/api";
import { getCookie } from "../core/utils/cookie";

const getNewTokens = async () => {
	const refreshToken = getCookie("refreshToken");
	if (!refreshToken) return;
	try {
		const response = await api.post("auth/refresh-token", { refreshToken });
		return { response };
	} catch (error) {
		return { error };
	}
};

export { getNewTokens };
