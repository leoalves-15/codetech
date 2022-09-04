import React, {FC} from "react";
import {ImagesComponentsTypes} from "./ImagesComponents.types";
import {ContainerImagesComponent} from './styles';

const ImagesComponent: FC<ImagesComponentsTypes> = (props) => {
    const {images = []} = props;
    return (
        <ContainerImagesComponent>
            {images.map((image) => (
                <a target="_blank" key={image.id} href={image?.link}>
                    <img src={image.src} alt={image.title} />
                </a>
            ))
            }
        </ContainerImagesComponent>
    );
}

export default ImagesComponent;