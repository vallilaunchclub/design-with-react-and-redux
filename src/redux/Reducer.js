
let initialState = {
    name : "Jeremey Rose",
    role: "Product Designer",
    location:"New York",
    phone:"+1 123 456 7890",
    address:"525 E 68th Street", 
    l2:  " New York, NY 10051-78-156-187-60",
    email:"hello@jeremeyrose.com",
    site:"www.jeremyrose.com",
    birthday:"June 5,1992",
    gender:"Male",
                                 
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "USER_ROLE":
            return {
                ...state,
                role: action.payload
            }
            case "USER_LOCATION":
            return {
                ...state,
                location: action.payload
            }
            case "USER_PHONE":
            return {
                ...state,
                phone: action.payload
            }
            case "USER_ADDRESS":
            return {
                ...state,
                phone: action.payload
            }
            case "USER_L2":
            return {
                ...state,
                phone: action.payload
            }
            case "USER_EMAIL":
            return {
                ...state,
                email: action.payload
            }
            case "USER_SITE":
            return {
                ...state,
                site: action.payload
            }
            case "USER_BIRTHDAY":
            return {
                ...state,
                site: action.payload
            }
            case "USER_GENDER":
            return {
                ...state,
                site: action.payload
            }
         default:
            return state
    }
}

export default Reducer