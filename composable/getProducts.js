const ROOT_API = import.meta.env.VITE_ROOT_API
const getProducts = async () => {
    try{
        const response = await fetch(`${ROOT_API}/Products`)
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        } else {
            const responseData = await response.json();
            return responseData
        }
    }catch (error) {
        console.log(error);
    }
}

export {getProducts}