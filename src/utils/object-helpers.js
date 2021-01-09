export const updateObjectInArray=(items,itemId,objIdName,newObjProps)=>{
    return  items.map(u => {
        if (u[objIdName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}