import React from "react";
import App from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../RootReducer/store";
import { createWrapper } from "next-redux-wrapper";
import Layout from "../components/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
