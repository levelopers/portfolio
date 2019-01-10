import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.sass'
import $ from 'jquery'
import './header.sass'
export default function header(props) {
  return (
    <div className={styles.outbox}>
      <div className={styles.logo}>
        <Link to="/">Dongsheng Yin</Link>
      </div>
      <div className={styles.header_nav}>
        <div className="header_nav">
          <Link to="/">Home</Link>
        </div>
        <div className="header_nav">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="header_nav">
          <Link to="/about">About</Link>
        </div>
        <div className={styles.contact} className="header_nav">
          Contact
        </div>
      </div>
    </div>
  )
}
// $(function() {  
//   $('.header_nav')
//     .on('mouseenter', function(e) {
//       console.log(111);
      
// 			var parentOffset = $(this).offset(),
//       		relX = e.pageX - parentOffset.left,
//           relY = e.pageY - parentOffset.top;
//           console.log(relX,relY);
          
// 			$(this).css({background:`rgb(${relX},${relY})`})
//     })
//     // .on('mouseout', function(e) {
// 		// 	var parentOffset = $(this).offset(),
//     //   		relX = e.pageX - parentOffset.left,
//     //   		relY = e.pageY - parentOffset.top;
//     // 	$(this).css({top:relY, left:relX})
//     // });
// });

