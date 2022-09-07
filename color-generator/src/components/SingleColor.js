import React, { useEffect, useState } from 'react';
import "./SingleColor.css";

function SingleColor({ weight, index, hex }) {
    const [copied, setCopied] = useState(false);
    const hexCode = `#${hex}`;
    let whiteColor = "";
    if (index > 10) {
        whiteColor="whiteColor"
    }

    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 3000)
    }, [copied]);

    const handleClick = () => {
        setCopied(true);
        navigator.clipboard.writeText(hexCode);
    }
    return (
    <div className={`singleColor  ${whiteColor}` }>
            <div
                onClick={handleClick}
                className='color__div'
                style={{
                    backgroundColor: `${hexCode}`,
                }}
            >
              <p className='weight'>{weight}%</p>
              <p className='hexcode'>{hexCode}</p>
                {copied && <p className='copied__hexCode'>Copied to Clipboard</p>}
 
        </div>
    </div>
  )
}

export default SingleColor
