export interface IAbsences {
    admitterId?: number,
    admitterNote: string,
    confirmedAt: Date,
    createdAt: Date,
    crewId: number,
    endDate: number,
    id: number,
    memberNote?: string,
    rejectedAt: Date,
    startDate: Date,
    type: string,
    userId: number
}
