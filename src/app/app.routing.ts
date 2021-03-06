import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// Layouts
import {FullLayoutComponent} from "./layouts/full-layout.component";
import {SimpleLayoutComponent} from "./layouts/simple-layout.component";

import {CanDeactivateGuard} from "./services/deactivateGuard/can-deactivate-guard.service";
import {AuthGuard} from "./services/deactivateGuard/auth-guard.service";

export const routes: Routes = [
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'sing',
    component: FullLayoutComponent,
    data: {
      title: 'sing'
    },
    children: [
      {
        path: '',
        loadChildren: './container/loginAndRegister/loginAndRegister.module#LoginAndRegisterModule',
      }
    ]
  }
  ,
  {
    path: 'getstart',
    component: FullLayoutComponent,
    data: {
      title: 'getStart'
    },
    children: [
      {
        path: '',
        loadChildren: './container/getstart/getstart.module#GetstartModule',
      }
    ]
  }
  ,
  {
    path: 'about',
    component: FullLayoutComponent,
    data: {
      title: 'about this site'
    },
    children: [
      {
        path: '',
        loadChildren: './container/about/about.module#AboutModule',
      }
    ]
  },
  {
    path: 'setting',
    component: FullLayoutComponent,
    data: {
      title: 'about this site'
    },
    children: [
      {
        path: '',
        loadChildren: './container/setting/setting.module#SettingModule',
      }
    ]
  },

  {
    path: '',
    redirectTo: 'topic',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: '主页'
    },
    canActivate: [AuthGuard], // 判断是否登录，本质是在路由前注入了auth-guard.services
    children: [
      {path: '', redirectTo: 'topic', pathMatch: 'full'},
      {
        path: 'topic',
        loadChildren: './container/topic/topic.module#TopicModule',
      },
      {
        path: 'user',
        loadChildren: './container/user/user.module#UserModule',
      },
      {
        path: 'message',
        loadChildren: './container/messages/messages.module#MessagesModule',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'pages/404'   // 如果没有路径对应 ，跳转到404页面
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanDeactivateGuard, AuthGuard]
})
export class AppRoutingModule {}
