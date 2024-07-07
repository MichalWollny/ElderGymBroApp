import React from 'react'
import { useCollapse } from 'react-collapsed'

function Expander() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <button {...getToggleProps()}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
  )
};

export default Expander;