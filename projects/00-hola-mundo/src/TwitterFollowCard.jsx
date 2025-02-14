import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing}) {
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/${userName}` }
                alt="El avatar de Leo" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span
                    className="tw-followCard-infoUsername"
                    >{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName}>
                    seguir
                </button>
            </aside>
        </article>
    )
}