'use client'

import Image from 'next/image'

const ActionIcon = () => {
    return (
        <div className='img-container'>
            <button onClick={() => {
                console.log("hi9");
            }} >
                <Image src={`add-file.svg`} alt={'add-file'} width="30" height="30" />
            </button>
            <button><Image src={`add-folder.svg`} alt={'add-folder'} width="30" height="30" /></button>
            <button>
                <Image src={`delete.svg`} alt={'deleted'} width="30" height="30" />
            </button>

        </div >
    )
}
export default ActionIcon;