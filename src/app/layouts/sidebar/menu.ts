import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
  
    {
        id: 3,
        label: 'Customers',
        icon: 'uil-users-alt',
     
        link: '/customer/customers',
    },
    {
        id: 4,
        label: 'Products',
        icon: 'mdi mdi-alpha-p-circle-outline',
       
        link: '/product/all-product',
    },
  
    {
        id: 5,
        label: 'Pregnancy',
        icon: 'mdi mdi-alpha-p-circle',
      
        link: '/dashboard',
        subItems: [
            {
                id: 99,
                label: 'Mother Week Data',
                link: '/pregnancy/mother-week-data',
                parentId: 8
            },
            {
                id: 36,
                label: 'Baby Week Data',
                link: '/pregnancy/baby-week-data',
                parentId: 8
            },
         
        ]
    },
    {
        id: 6,
        label: 'Notifications',
        icon: 'bx bxs-notification',
      
        link: '/notification',
    },
    {
        id: 6,
        label: 'Yoga Videos',
        icon: 'uil-video',
      
        link: '/yoga',
    },
    {
        id: 7,
        label: 'Admin Users',
        icon: 'uil-users-alt',
      
        link: '/admin/all-user',
    },
    {
        id: 8,
        label: 'Articles',
        icon: 'uil-clipboard-notes',
        link: '/article/all-articles',
    },
    {
        id: 8,
        label: 'Groups',
        icon: 'bx bxs-group',
        link: '/group/all-groups',
    },
];

