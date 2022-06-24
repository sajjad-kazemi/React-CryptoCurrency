import './PageBtn.css'

import React from 'react'

function PageBtn({setPage,pageChange,currentPage}) {
  const backBtn = (currentPage >1)&&  (<button className="btn back" onClick={()=>setPage(pageChange+currentPage)} ></button>)
  const nextBtn = (currentPage <9)&& (<button className="btn next" onClick={() => setPage(pageChange+currentPage)} ></button>)
  return (
    <>
      {(pageChange===1) && (((pageChange === 1) && nextBtn) || (<button className="btn next" disabled={true}></button>))}
      {(pageChange===-1) && (((pageChange === -1) && backBtn) || (<button className='btn back' disabled={true}></button>))}
    </>
  )
}

export default PageBtn