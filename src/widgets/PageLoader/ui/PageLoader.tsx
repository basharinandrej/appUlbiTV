import {FC} from 'react'
import {Loader} from "@shared/ui/Loader/Loader";
import {PageLoaderProps} from "../types/interfaces/page-loader-props";
import {setClassNames} from "@shared/libs/setClassNames";
import {PageLoaderType} from "@widgets/PageLoader/types/enums/page-loader-type";

import styles from './PageLoader.module.sass'

export const PageLoader: FC<PageLoaderProps> = ({type = PageLoaderType.PRIMARY}) => {


    return (
        <div className={setClassNames(
            styles.PageLoader,
            {[styles.PageLoaderTypeSecondary]: type === PageLoaderType.SECONDARY})
        }>
            <Loader />
        </div>
    )
}


