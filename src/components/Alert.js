import React, { useState } from 'react'

export default function Alert(props) {
    const capitalise = (word)=>{
        let lower =word.toLowerCase();
        lower = lower.charAt(0).toUpperCase()+ lower.slice(1)
        return lower
    }

  return (
    
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong> {capitalise (props.alert.type)}</strong> : {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}
