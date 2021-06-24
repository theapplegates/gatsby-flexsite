import { Link } from 'gatsby'
import React from 'react'

import Logo from './pic.jpg'

const Sidebar = ({ siteMetadata }) => (
	<>
		<aside className="sidebar">
			<header>
			<script src="https://kit.fontawesome.com/1fca07cddd.js" crossorigin="anonymous"></script>
				<div className="about">
					<div className="cover-author-image">
						<Link to="/">
							<img src={Logo} alt={siteMetadata.author} />
						</Link>
					</div>
					<div className="author-name">{siteMetadata.author}</div>
					<p>{siteMetadata.description}</p>
				</div>
			</header>
			<footer>
				<section className="contact">
					<h3 className="contact-title">Contact me</h3>
					<ul>
						{siteMetadata.social.twitter && (
							<li>
								<a
									href={`https://twitter.com/${siteMetadata.social.twitter}`}
									target="_blank"
								>
									<i className="fa fa-twitter" aria-hidden="true" />
								</a>
							</li>
						)}
						{siteMetadata.social.facebook && (
							<li>
								<a
									href={`https://facebook.com/${siteMetadata.social.facebook}`}
									target="_blank"
								>
									        
										<i class="fa-thin fa-restroom"></i>
								</a>
							</li>
						)}
						{siteMetadata.social.github && (
							<li>
								<a
									href={`https://github.com/${siteMetadata.social.github}`}
									target="_blank"
								>
									<i className="fa fa-github" aria-hidden="true" />
								</a>
							</li>
						)}
						{siteMetadata.social.linkedin && (
							<li>
								<a
									href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
									target="_blank"
								>
									<div class="fa-3x">
  <i class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 0.5s;" ></i>
</div>

								</a>
							</li>
						)}
						{siteMetadata.social.email && (
							<li>
								<a href={`mailto:${siteMetadata.social.email}`} target="_blank">
									<i class="fa-thin fa-paper-plane"></i>
								</a>
							</li>
						)}
					</ul>
				</section>
				<div className="copyright">
					<p>
						{new Date().getFullYear()} &copy; {siteMetadata.author}
					</p>
				</div>
			</footer>
		</aside>
	</>
)

export default Sidebar
