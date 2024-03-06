export default interface PostListType {
    content?: Array<{
    name: string;
    address: string;
    city: number;
    country: string;
    description: string;
    pictures: string | null;
    open: [
        {
            date: string
        }
    ]
  }>;
    last: boolean;
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    length?: number;
}

export default interface PostType {
    name: string;
    address: string;
    city: number;
    country: string;
    description: string;
    pictures: string | null;
    open: [
        {
            date: string
        }
    ]
}