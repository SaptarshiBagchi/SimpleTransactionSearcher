interface IService {
    all<T extends Document>(): Promise<T[]>;
}

export default IService;