
interface IService<T> {
    all(): Promise<T[]>
    create(data: T): Promise<T>
    findText(text: string): Promise<T[]>
}

export default IService;