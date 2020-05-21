type BaseAction<T = any> = {
    type: string,
    payload: T
}