const fetchData = async (location, days) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d5d6d4148af64be980882449230903&q=${location}&days=${days}&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
};

export default fetchData;