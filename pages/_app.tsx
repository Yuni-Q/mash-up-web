import { applyMiddleware, compose, createStore } from 'redux';
import axios from 'axios';
import App from 'next/app';
import createSagaMiddleware from 'redux-saga';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getCookie, getCookieServer } from '../common/cookie';
import reducer from '../reducers';
import rootSaga from '../sagas';

class MyApp extends App<Props, any> {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(result => {
          console.log('service worker registration successful', result);
        })
        .catch(err => {
          console.log('service worker registration failed', err.message);
        });
    }
  }
  render() {
    const { Component, store, pageProps = {} } = this.props;
    return (
      <Provider store={store}>
        <Helmet
          title="MASH-UP"
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            {
              name: 'viewport',
              content:
                'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
            },
            // {
            //   'http-equiv': 'X-UA-Compatible',
            //   content: 'IE=edge',
            // },
            {
              name: 'description',
              content: 'MASH-UP',
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              href: '',
            },
          ]}
        />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const configureStore = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    (store: any) => (next: any) => (action: any) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(store, action);
      }
      next(action);
    },
  ];
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(
          applyMiddleware(...middlewares),
        )
      : compose(applyMiddleware(...middlewares));
  const store: any = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

MyApp.getInitialProps = async context => {
  let token = '';
  let pk = '';
  const { res } = context.ctx;
  const isServer = !!context.ctx.req;
  if (isServer) {
    token = getCookieServer({ value: 'token', context });
    pk = getCookieServer({ value: 'pk', context });
  } else {
    token = getCookie('token') || '';
    pk = getCookie('pk') || '';
  }
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  let pageProps: any = {};
  if (context.Component.getInitialProps) {
    const { ctx } = context;
    // @ts-ignore
    const obj : any  = {
      ctx,
      token,
      pk,
      res,
    }
    pageProps = await context.Component.getInitialProps(obj);
  }
  return { pageProps, isServer };
};

interface Props {
  Component: any;
  store: any;
  pageProps: any;
};

export default withRedux(configureStore)(withReduxSaga(MyApp));
