export class UserRepository {
    async me(status: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (status)
                    resolve({
                        information: 'Saptarshi Bagchi'
                    })
                reject(new Error('Some error happened'))
            }, 1500)
        })
    }
}
export default new UserRepository()