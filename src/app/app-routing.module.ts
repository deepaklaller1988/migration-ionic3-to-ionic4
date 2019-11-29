import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {LoginPage} from './components/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)},
  { path: 'signup', loadChildren: './components/signup/signup.module#SignupPageModule' },
  { path: 'forgot-password', loadChildren: './components/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: '', loadChildren: './components/tabs/tabs.module#TabsPageModule' },
  { path: 'message', loadChildren: './components/message/message.module#MessagePageModule' },
  { path: 'post', loadChildren: './components/post/post.module#PostPageModule' },
  { path: 'chat/:uid/:username/:chatId', loadChildren: './components/chat/chat.module#ChatPageModule' },
  { path: 'comments', loadChildren: './components/comments/comments.module#CommentsPageModule' },
  //tabs route
  //{ path: 'search', loadChildren: './components/search/search.module#SearchPageModule' },
  { path: 'user-profile', loadChildren: './components/user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'user-list', loadChildren: './components/user-list/user-list.module#UserListPageModule' },
  { path: 'others-profile/:uid', loadChildren: './components/others-profile/others-profile.module#OthersProfilePageModule' },
  { path: 'edit-profile', loadChildren: './components/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'settings', loadChildren: './components/settings/settings.module#SettingsPageModule' },
  { path: 'following-list', loadChildren: './components/following-list/following-list.module#FollowingListPageModule' },
  { path: 'follower-list', loadChildren: './components/follower-list/follower-list.module#FollowerListPageModule' },
  { path: 'change-password', loadChildren: './components/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'blocked-list', loadChildren: './components/blocked-list/blocked-list.module#BlockedListPageModule' },
  //{ path: 'notification', loadChildren: './components/notification/notification.module#NotificationPageModule' },
  //{ path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
 // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
