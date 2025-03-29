import React from 'react'

type ProgressBarProps = {
    progress: number;
}

const ProgressBar = ({progress}: ProgressBarProps) => {
    const roundedProgress = Number(progress.toFixed(0));
    return (
        <div className='w-full'>
            <div className='relative h-6 w-full rounded-full bg-custom-light-blue'>
                <div
                    className="absolute top-0 left-0 h-6 bg-custom-blue rounded-full"
                    style={{ width: `${progress}%`}}
                >
                    <div className='absolute ml-5 top-1/2 -translate-y-1/2'>
                        {roundedProgress}%
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProgressBar