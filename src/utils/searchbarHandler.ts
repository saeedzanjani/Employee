export const filterByType = (absences: any, type: any) => {
    return absences.filter((item: any) => item.type.includes(type))
}

export const filterByDate = (absences: any, startDate: any) => {
    return absences.filter((item: any) => item.startDate.includes(startDate))
}