import React from 'react';
import PropTypes from 'prop-types';
import style from './EmptyState.module.css';

const EmptyState = ({
  title = "No items found",
  description = "There are no items to display at the moment.",
  icon = null,
  action = null,
  showAction = true
}) => {
  return (
    <div className={style['empty-state-container']}>
      <div className={style['empty-state-content']}>
        {icon && <div className={style['empty-state-icon']}>{icon}</div>}
        <h3 className={style['empty-state-title']}>{title}</h3>
        <p className={style['empty-state-description']}>{description}</p>
        {showAction && action && <div className={style['empty-state-action']}>{action}</div>}
      </div>
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
  showAction: PropTypes.bool
};

export default EmptyState;