const paginate = (list) => {
    const itemsPerPage = 10;
    const noOfPages = Math.ceil(list.length/itemsPerPage);

    const newList = Array.from({ length: noOfPages }, (_, index)=>{
        const start = index * itemsPerPage;
        return list.slice(start, start + itemsPerPage);
    });
    
    return newList;
};

export default paginate;