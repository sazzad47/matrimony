import { createStore, applyMiddleware } from 'redux'
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index'

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
const persistor = persistStore(store)

 const DataProvider = ({children}) => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>
    )
}

export default DataProvider