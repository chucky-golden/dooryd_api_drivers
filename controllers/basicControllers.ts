const login = (req: any, res: any) => {
    res.json({ message: 'login found' })
}



const register = (req: any, res: any) => {
    res.json({ message: 'register found' })
}



export default  {
    login,
    register
}