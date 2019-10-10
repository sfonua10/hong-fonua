import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import "./header.module.scss"
import headerStyles from "./header.module.scss"
const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
        {siteTitle}
      </Link>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/mealprep"
          >
            Meal Prep
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/workouts"
          >
            Workouts
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/keto"
          >
            Keto
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/testimony"
          >
            Testimonies
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
