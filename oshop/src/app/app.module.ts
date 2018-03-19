import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent, 
    AdminOrdersComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
    	{ path: '', component:HomeComponent},
    	{ path: 'products', component:ProductsComponent},
    	{ path: 'shopping-cart', component:ShoppingCartComponent},
      { path: 'login', component:LoginComponent},

    	{ path: 'check-out', component:CheckOutComponent, canActivate: [AuthGuardService]},
    	{ path: 'order-success', component:OrderSuccessComponent, canActivate: [AuthGuardService]},
    	{ path: 'my/orders', component:MyOrderComponent, canActivate: [AuthGuardService]},

    	{ path: 'admin/products', component:AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    	{ path: 'admin/orders', component:AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]}
    
    	])
    
  ],
  providers: [
      AuthService,
      AuthGuardService,
      AdminAuthGuardService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
