function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //...
}

setAlertType('success')
setAlertType('danger')
// setAlertType('default')