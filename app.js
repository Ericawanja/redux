// Actions

// CREATE POLICY
// CREATE  CLAIM
// DELETE POLICY
import {combineReducers,createStore} from'redux'
const createPolicy=(name,amount)=>{
    return {
        type:'CREATE_POLICY',
        payload:{
            name,amount
        }
    }
}

const createClaim=(name,amount)=>{
    return {
        type:'CREATE_CLAIM',
        payload:{
            name,amount
        }
    }
}

const deletePolicy=(name)=>{
    return {
        type:'DELETE_POLICY',
        payload:{
            name
        }
    }
}
// ACCOUNTING DEPARTMENT
const accounting=( money=0, action)=>{
        if(action.type==='CREATE_POLICY'){
            return money+action.payload.amount
        }
        if(action.type==='CREATE_CLAIM'){
            return money-action.payload.amount
        }
        return money
}

// CLAIMS DEPARTMENT


    const claims=(listofclaims=[], action)=>{
        if(action.type==='CREATE_CLAIM'){
            return [...listofclaims,action.payload.name]
        }
        return listofclaims
    }

    // POLICY DEPARTMENT
    const policy= (listofpeoplewithpolicies=[], action)=>{
        if(action.type==='CREATE_POLICY'){
            return [...listofpeoplewithpolicies,action.payload.name]
        }
        if(action.type==='DELETE_POLICY'){
            return listofpeoplewithpolicies.filter(name=>name!==action.payload.name)
        }
        return listofpeoplewithpolicies
    }

    const ourdepartmentsdata= combineReducers({
       policy ,
       claims,
       accounting
    })

    const store = createStore(ourdepartmentsdata)

    // DISPATCH SOME ACTIONS

    store.dispatch(createPolicy('Gift', 800))
    store.dispatch(createPolicy('Abraham', 600))
    store.dispatch(createPolicy('john', 600))
    store.dispatch(createPolicy('doe', 600))

    store.dispatch(createClaim('john', 900))

    store.dispatch(deletePolicy('doe'))
    


    console.log(store.getState());