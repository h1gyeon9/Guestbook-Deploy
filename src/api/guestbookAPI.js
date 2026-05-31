// /guestbook GET
export const getGuestbooks = async () => {
    const res = await fetch("http://3.37.229.237:8000/guestbook/");
    const result = await res.json();

    if(!res.ok){
        throw {
            status: result.status,
            message: result.message
        };
    }

    return result;
};


// /guestbook/{guestbook_id} GET
export const getGuestbook = async (guestbook_id) => {
    const res = await fetch(`http://3.37.229.237:8000/guestbook/${guestbook_id}/`);
    const result = await res.json();

    if (!res.ok){
        throw {
            status: result.status,
            message: result.message
        };
    }

    return result;
}


// /guestbook POST
export const postGuestbook = async ({title, writer, content, password}) => {
    const res = await fetch("http://3.37.229.237:8000/guestbook/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, writer, content, password})
    });
    const result = await res.json();

    if (!res.ok){
        throw {
            status: result.status,
            message: result.message
        };
    }

    return result;
};


// /guestbook/{guestbook_id} DELETE
export const deleteGuestbook = async ({guestbook_id, password}) => {
    const res = await fetch(`http://3.37.229.237:8000/guestbook/${guestbook_id}/`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password})
    });
    const result = await res.json();

    if (!res.ok){
        throw {
            status: result.status,
            message: result.message
        };
    }

    return result;

}