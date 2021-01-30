import {login,logout} from '../../actions/auth';

test('should generate login action to store uid in store', () => {
    const loginAction = login('123abc');

    expect(loginAction).toEqual(
        {
            type: 'LOGIN',
            uid: '123abc'
        }
    )
}


);

test('should generate logout action to remove uid from store', () => {
    const logoutAction = logout('123abc');

    expect(logoutAction).toEqual(
        {
            type: 'LOGOUT'
        }
    )
}


);