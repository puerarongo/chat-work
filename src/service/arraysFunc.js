const arraysFunc = (arr, id) =>  arr.filter(elem => elem.id === id).sort((a, b) => a.time - b.time)

export default arraysFunc;