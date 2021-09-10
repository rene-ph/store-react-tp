import { takeLatest, put, delay } from "redux-saga/effects";
import { add, remove } from '../slice/cart-slice';
import { setDisplayModal } from '../slice/root-slice';


function* onCardAdded() {
    yield put(setDisplayModal({ state: true, text: 'Item added to the cart', type: 'success' }));
    yield delay(600)
    yield put(setDisplayModal({ state: false, text: '', type: '' }))
}
function* onCardRemoved() {
    yield put(setDisplayModal({ state: true, text: 'Item removed from the cart', type: 'error' }));
    yield delay(600)
    yield put(setDisplayModal({ state: false, text: '', type: '' }));
}

function* cartSaga() {
    yield takeLatest(add, onCardAdded);
    yield takeLatest(remove, onCardRemoved);
}

export default cartSaga;