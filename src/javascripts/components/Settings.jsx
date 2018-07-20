import { detectKeyString } from 'key-string'
import actions from '../actions'
import React from 'react'

class Action extends React.Component {
  onDeleteButtonClick() {
    this.props.onDeleteButtonClick(this.props.keyString)
  }

  render() {
    return(
      <tr>
        <td>
          <kdd>{ this.props.keyString }</kdd>
        </td>
        <td>
          { this.props.actionDefinition.type }
        </td>
        <td>
          { this.props.actionDefinition.value }
        </td>
        <td>
          <span onClick={ this.onDeleteButtonClick.bind(this) } className="cursor-pointer">x</span>
        </td>
      </tr>
    )
  }
}
