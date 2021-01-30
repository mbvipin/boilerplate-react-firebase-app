import authReducer from '../../reducers/auth';

test('should set uid',()=>
{

    const action={

        type:'LOGIN',
        uid:'12345'
    }

    const state=authReducer({}, action);
    expect(state).toEqual({uid:'12345'});

});


test('should remove uid',()=>
{

    const loginAction={

        type:'LOGIN',
        uid:'12345'
    }

    authReducer({}, loginAction);

    const logoutAction={

        type:'LOGOUT'
    }

    const state=authReducer({}, logoutAction);
    expect(state).toEqual({});

});