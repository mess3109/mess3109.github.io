import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.scss'


const NavBar = ( {selected, onClickSelect} ) => {
	const baseCls = 'navbar'
	const active = '--active'
	const about = 'about'
	const posts = 'posts'
	const contact = 'contact'

  let aboutLinkCls = `${baseCls}`;
  aboutLinkCls += selected === about ? active : '';

  let postsLinkCls = `${baseCls}`;
  postsLinkCls += selected === posts ? active : '';

  let contactLinkCls = `${baseCls}`;
  contactLinkCls += selected === contact ? active : '';

return (
	<div className="navbar">
		<NavLink to="/about"><span className={aboutLinkCls} onClick={() => onClickSelect(about)}>ABOUT</span></NavLink>
		<NavLink to="/posts"><span className={postsLinkCls} onClick={() => onClickSelect(posts)}>POSTS</span></NavLink>
		<NavLink to="/contact"><span className={contactLinkCls} onClick={() => onClickSelect(contact)}>CONTACT</span></NavLink>
	</div>
	);
};

export default NavBar
