const getProducts = async () => {
    try{
        const response = await fetch(`https://gentle-woman-db.onrender.com/Products`)
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