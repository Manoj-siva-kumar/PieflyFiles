export interface permissionValue {
    model_name : string,
    permission: string
}

export const permissionData: permissionValue[] = [
    {
        model_name: 'user',
        permission: 'List',
    },
    {
        model_name: 'user',
        permission: 'Create',
    },
    {
        model_name: 'user',
        permission: 'Update',
    },
    {
        model_name: 'user',
        permission: 'Delete',
    },

    {
        model_name: 'role',
        permission: 'list',
    },
    {
        model_name: 'role',
        permission: 'Create',
    },
     {
        model_name: 'role',
        permission: 'update',
    },
    {
        model_name: 'role',
        permission: 'Delete',
    },
    {
        model_name: 'permission',
        permission: 'List',
    },
    {
        model_name: 'permission',
        permission: 'Create',
    },
    {
        model_name: 'permission',
        permission: 'Update',
    },
    {
        model_name: 'permission',
        permission: 'Delete',
    },
    {
        model_name: 'Tower',
        permission: 'List',
    },
    {
        model_name: 'Tower',
        permission: 'Create',
    },
    {
        model_name: 'Tower',
        permission: 'Update',
    },
    {
        model_name: 'Tower',
        permission: 'Delete',
    },
]