'use client'

import Image from 'next/image'

interface Props {
    addFile?: boolean;
    addFolder?: boolean;
    deleteItem?: boolean
}

const ActionIcon: React.FC<Props> = ({ addFile = true, addFolder = true, deleteItem = true }) => {
    return (
        <div className='img-container'>
            {addFile && <button onClick={() => {
                console.log("hi9");
            }} >
                <Image src={`add-file.svg`} alt={'add-file'} width="30" height="30" />
            </button>}
            {addFolder && <button><Image src={`add-folder.svg`} alt={'add-folder'} width="30" height="30" /></button>}
            {deleteItem && <button>
                <Image src={`delete.svg`} alt={'deleted'} width="30" height="30" />
            </button>}

        </div>
    )
}
export default ActionIcon;