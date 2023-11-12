import {VFC} from 'react'
import {setClassNames} from '@shared/index'

import styles from './ArticleBlockCodeComponent.module.sass'

export const ArticleBlockCodeComponent: VFC<ArticleBlockCodeComponentProps> = (props) => {
    const {className, code} = props
    return (
        <div className={setClassNames(styles.articleBlockCodeComponent, {}, [className])}>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    )
}

interface ArticleBlockCodeComponentProps {
    className?: string
    code: string
}