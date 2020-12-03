import React from "react";

export default class Tasklists extends React.Component {
	render() {
	  const tasklists = this.props.tasklists.map( tasklist => {
		return <div key={tasklist.id}>{tasklist.name}</div>
	  })
	  return <div>{tasklists}</div>
	}
}