export interface tower{
    id:string,
    type_no:string,
    tower_name:string,
    location:string,
    latitude:string,
    longitude:string,
}

export const towerData : tower[]=[
    {
        id:'PFVX586421',
        type_no:'Type A',
        tower_name:'Tower 1',
        location:'Mysuru',
        longitude:'22.309339',
        latitude:'87.892150'
    },
    {
        id:'PFVX599325',
        type_no:'Type B',
        tower_name:'Tower 2',
        location:'Mysuru',
        longitude:'22.309687',
        latitude:'87.855550'
    },
    {
        id:'PFVX586421',
        type_no:'Type C',
        tower_name:'Tower 3',
        location:'Mysuru',
        longitude:'22.309339',
        latitude:'87.866852'
    }

]