import Title from "components/Statistics/Title/Title";
import Stats from "components/Statistics/Stats/Stats";
import data from "components/Statistics/data.json";

import css from "components/Statistics/Statistics.module.css"

const StatisticMarcup = () => {
return(
<section className={css.statistics}>
<Title title='Upload stats'/>
<Stats data ={data}/> 
</section>
)}

export default StatisticMarcup;