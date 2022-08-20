export const setObj = (key, value) => {
    localStorage.setItem(`${key}`, JSON.stringify(value))
};


export const getObj = (key) => {
    const find = JSON.parse(localStorage.getItem(`${key}`))
    return find
};


export const getData = (key, id, search) => {
    const find = JSON.parse(localStorage.getItem(`${key}`));
    if (!find) return

    const filterData = find
        .filter(elem => Number(elem.id) === id)
        .sort((a, b) => a.time - b.time)
    
    if (search === "text") {
        const filterText = filterData.map(elem => elem.message).slice(-1);
        return filterText[0];
    } 
    
    const filterTime = filterData.map(elem => elem.time).slice(-1);
    return filterTime[0];
};