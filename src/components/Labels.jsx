import React from 'react'
import Remark from './labels/Remark';
import View from './labels/View';
import Batch from './labels/Batch';

function Labels({children,marks, tag, hg, title}) {
    return (
        <div className='max-w-5xl  items-center py-3.5 m-auto  '>
            {marks>= 9.5 ? <Batch title={title} marks={marks} /> : null}
            <div className={`max-w-5xl  items-center py-3.5 m-auto flex bg-white  justify-between md:flex-row flex-col md:h-[${hg}px]  `}>
                <div className='m-8'><img src="comp.png" alt="" className='w-36 h-28'/></div>
                <div className='w-3/4 px-8'>
                  {children} 
                </div>
                <div className='flex flex-col md:gap-20 gap-12 items-center'>
                    <Remark marks={marks} tag={tag}/>
                    <div className='mb-2 mr-3'>
                        <View />
                    </div>                                              
                </div>
            </div>
        </div>

    )
}

export default Labels