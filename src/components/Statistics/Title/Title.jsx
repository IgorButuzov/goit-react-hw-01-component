import PropTypes from "prop-types";

import css from 'components/Statistics/Title/Title.module.css'

const Title = ({title}) =>{
    return title&& <h2 className={css.title}>{title}</h2>
}

export default Title;

Title.propTypes = {
    title: PropTypes.string,  
  }