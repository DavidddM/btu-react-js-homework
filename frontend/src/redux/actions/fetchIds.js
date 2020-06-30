import { startFetching, fetchIdsError, fetchIdsSuccess } from "../actions";
import settings from "../../settings";

function fetchIds(uid) {
    return (dispatch) => {
        dispatch(startFetching());
        fetch(`${settings.APP_BASE_URL}/users/${uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(
                    fetchIdsSuccess({
                        ratedIds: res.links.map((l) => String(l.id)),
                    })
                );
            })
            .catch((error) => {
                dispatch(fetchIdsError({ fetchingErr: error }));
            });
    };
}

export default fetchIds;
