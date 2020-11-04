import React from 'react'
import './Subs.css'
import { GoDiffRemoved } from 'react-icons/go'

const Subs = ({ subsList, removeSub }) => {
    return (
        subsList.map((sub, index) => (
            <div className='sub-card' key={index}>
                <div className='sub-data' key={sub.id}>
                    <p className='p-sub-name'>{sub.subName}</p>
                    <p className='p-sub-date'>{sub.subDate}</p>
                    <p>{sub.subType}</p>
                </div>
                <div className='sub-remove' onClick={() => removeSub(sub.id)}>
                    <GoDiffRemoved className='add-icon' size={20} color='#fff' />
                </div>
            </div>
        ))
    )
}

export default Subs
