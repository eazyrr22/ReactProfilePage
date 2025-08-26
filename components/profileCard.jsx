import React from 'react'

export default function ProfileCard() {
    return (
        <div className='profile-card'>
            <img id="avatar" src={profile_avatar.png} alt="profie avatar" srcset="https://avatar.iran.liara.run/public/boy" />
            <label htmlFor="avatar">I am Eazy</label>
            <p className='description'>Aspiring software developer with a strong foundation in my first programming language.
                Building practical skills in problem-solving, clean code, and modern development practices.
                Eager to grow through real-world projects and contribute to innovative software solutions.</p>
        </div>
    )
}
