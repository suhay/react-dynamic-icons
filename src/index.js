import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

export const Icon = ({
  className,
  library,
  icon
}) => {
  let IconLoader;

  switch (library) {
    case 'fa':
    default:
      IconLoader = React.lazy(() => import(`./FaLoader`))
      break;
  }

  return (
    <Suspense fallback={<i />}>
      <IconLoader icon={icon} className={className} />
    </Suspense>
  )
}

Icon.defaultProps = {
  className: null,
  library: 'fa',
}

Icon.propTypes = {
  className: PropTypes.string,
  library: PropTypes.oneOf(['fa']),
  icon: PropTypes.string.isRequired,
}

export default Icon
