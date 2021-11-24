// TODO:camelCase
export interface Job{
    id:number,
    date_time:string,
    last_modify_date:string,
    requirement:string,
    title: string,
    fulltime: number,
    parttime: number,
    freelance: number,
    contract: number,
    country: number,
    tags: Tag[],
    author: { display_name: string },
}

export interface Tag{
    name: string
}

export interface IJobState{
    jobs: Job[]
}