import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 

// Layout
import Header from './components/layout/Header';
import Content from './components/layout/Content';

// Views
import Home from './views/Home';
import Stats from './views/Stats';
import Controls from './views/Controls';
import Settings from './views/Settings';

import store from './store';

import 'bulma/css/bulma.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/controls" element={<Controls />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Content>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('app'),
);

if (import.meta.hot) {
    import.meta.hot.accept();
}
