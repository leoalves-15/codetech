type Img = {
    id: number,
    src: string;
    title?: string;
    link?: string;
};

export type ImagesComponentsTypes = {
    images: Img[];
};