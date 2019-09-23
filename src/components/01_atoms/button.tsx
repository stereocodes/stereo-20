import React from 'react';

interface IButton {
  label: string
}

const Button = (props: IButton) => {
  return (
    <button>{props.label}</button>
  )
}

Button.defaultProps = {
  label: 'hello world'
}

export default Button;