# MyApp

Duo mode project: serve as app, build to library from same project

## install dependency:
> npm i

## build lib
> npm run build


## install into an angular app
```
npm i --save ../../path-to/my-app-0.0.0.tgz
```

## consume the lib's component and service:
```
// setup:
import { AppModule as AliasAppModule } from 'my-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AliasAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## usage

App.component.html:
```
<my-lib-component></my-lib-component>
```

App.component.ts
```
export class AppComponent {
  title = 'consumer';
  constructor(private cal: CalculationService){
    console.log('zzz service injected', cal);
  }
}
```
