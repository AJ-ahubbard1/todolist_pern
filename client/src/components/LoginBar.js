import React, { Fragment } from 'react'
// import {useState} when ready
const LoginBar = () => {
	/*
	   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin:24px 0;">
	   <a class="navbar-brand" href="javascript:void(0)">Logo</a>
	   <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
	   <span class="navbar-toggler-icon"></span>
	   </button>

	   <div class="navbar-collapse collapse" id="navb" style="">
	   <ul class="navbar-nav mr-auto">
	   <li class="nav-item">
	   <a class="nav-link" href="javascript:void(0)">Link</a>
	   </li>
	   <li class="nav-item">
	   <a class="nav-link" href="javascript:void(0)">Link</a>
	   </li>
	   <li class="nav-item">
	   <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
	   </li>
	   </ul>
	   <form class="form-inline my-2 my-lg-0">
	   <input class="form-control mr-sm-2" type="text" placeholder="Search">
	   <button class="btn btn-success my-2 my-sm-0" type="button">Search</button>
	   </form>
	   </div>
	   </nav>

	const styles = {
backgroundColor: '#fff'
	}
	 */
	return (
			<Fragment>
			<nav className="navbar navbar-dark bg-success d-flex justify-content-between" >
			<a className="navbar-brand" href="/">PERN TODO LIST</a>
				<form className="form-inline text-center">
					<input className="form-control" type="text" placeholder="Username" ></input>
					<input className="form-control" type="text" placeholder="Password" ></input>
					<button className="btn btn-primary" type="button">Login</button>
					<button className="btn btn-warning" type="button">Sign Up</button>
				</form>
			</nav>
			</Fragment>
		   )
}

export default LoginBar
	/*
	   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin:24px 0;">
	   <a class="navbar-brand" href="javascript:void(0)">Logo</a>
	   <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
	   <span class="navbar-toggler-icon"></span>
	   </button>

	   <div class="navbar-collapse collapse" id="navb" style="">
	   <ul class="navbar-nav mr-auto">
	   <li class="nav-item">
	   <a class="nav-link" href="javascript:void(0)">Link</a>
	   </li>
	   <li class="nav-item">
	   <a class="nav-link" href="javascript:void(0)">Link</a>
	   </li>
	   <li class="nav-item">
	   <a class="nav-link disabled" href="javascript:void(0)">Disabled</a>
	   </li>
	   </ul>
	   <form class="form-inline my-2 my-lg-0">
	   <input class="form-control mr-sm-2" type="text" placeholder="Search">
	   <button class="btn btn-success my-2 my-sm-0" type="button">Search</button>
	   </form>
	   </div>
	   </nav>
	 */
