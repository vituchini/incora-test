import React from "react";

export const updateObjectInArray = (items, itemId, objIdName, newObjProps) => {
    return items.map(u => {
        if (u[objIdName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
export const objectToJsx = (obj) => {
    if (obj) return Object.keys(obj).map((x, y) => {
        if (typeof obj[x] === "string") {
            return (
                <div key={y}>{x} : {obj[x]} </div>
            )
        } else if (typeof obj[x] === "object") {
            return (
                <div key={y}>{objectToJsx(obj[x])}</div>
            )
        }
        return ''
    })
}