import CountryCard from './CountryCard';
import countryData from '../countryData';

const FilterCountry=(props)=>{
  let {inputval}=props;
  console.log(inputval);
  return(
    <div className="countries-container">
    {inputval?.filter((val) => {
      return (
        <CountryCard
          key={val.name.common}
          name={val.name.common}
          flag={val.flags.svg}
          population={val.population}
          region={val.region}
          capital={val.capital?.[0]}
        />
      )
    })}
  </div>
  )
}
export default FilterCountry;