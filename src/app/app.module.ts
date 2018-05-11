import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Toast } from '@ionic-native/toast';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { BonEntreePage} from '../pages/bon-entree/bon-entree';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { DataService } from '../Shared/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { BonSortiePage } from '../pages/bon-sortie/bon-sortie';
import { BonRetourPage } from '../pages/bon-retour/bon-retour';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { HomePage } from '../pages/home/home';
import { ReservationPage } from '../pages/reservation/reservation';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,HomePage,
    BonEntreePage, BonSortiePage, BonRetourPage,
    LoginPage,
    ReservationPage,  
 
   ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,HomePage,
    BonEntreePage, BonSortiePage, BonRetourPage,
    LoginPage,ReservationPage,    
  ],
  providers: [
    File,
    FileOpener,DocumentViewer,
    FileTransfer,
    HttpModule,
    BarcodeScanner,
    StatusBar,
    SplashScreen,Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   , DataService
  ]
})
export class AppModule {}
