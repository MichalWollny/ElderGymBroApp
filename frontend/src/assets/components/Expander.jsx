import React from 'react'
import { useCollapse } from 'react-collapsed'

//icons
import chevronup from '/src/assets/icons/svg/chevronup.svg';

function Expander() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <button {...getToggleProps()}>
        {isExpanded ? 'Workout title' : 'Workout title'}
      </button>

      <section {...getCollapseProps()}>

      <div>
          test
        </div>
      </section>
    </div>
  )
};

export default Expander;

