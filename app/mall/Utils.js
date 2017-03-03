
export function navigatorGoBack(navigator) {
    if (navigator && navigator.getCurrentRoutes().length>0){
        navigator.pop();
        return true;
    }
    return false;
}