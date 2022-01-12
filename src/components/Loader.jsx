import React from 'react'
import { BounceLoader } from 'react-spinners'

function Loader() {
    return (
        <div className='main-loader'>
        <div className='loader'>
            <h2 className='loader-heading'>Loading...</h2>
            <BounceLoader color='#9013FE' loading={true}  size={150} />
        </div>
        </div>
    )
}

export default Loader
