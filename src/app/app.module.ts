import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { PostsReducer } from './states/posts/posts.reducer';
import { PostsEffects } from './states/posts/posts.effect';
import { SignalCounterComponent } from './signals/signal-counter/signal-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostsComponent,
    SignalCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}, {}),
    HttpClientModule,
    EffectsModule.forRoot([])
  ],
  providers: [
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({name: 'posts', reducer: PostsReducer}),
    provideEffects(PostsEffects)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


