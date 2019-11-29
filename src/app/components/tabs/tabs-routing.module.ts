import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'TabsPage',
    component: TabsPage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: '../home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: 'notification',
          children:
            [
              {
                path: '',
                loadChildren: '../notification/notification.module#NotificationPageModule'
              }
            ]
        },
        {
          path: 'search',
          children:
            [
              {
                path: '',
                loadChildren: '../search/search.module#SearchPageModule'
              }
            ]
        },
        {
          path: 'user-profile',
          children:
            [
              {
                path: '',
                loadChildren: '../user-profile/user-profile.module#UserProfilePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/TabsPage/home',
          pathMatch: 'full'
        }
      ]
  },
  // {
  //   path: 'TabsPage',
  //   redirectTo: '/tabTabsPages/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}