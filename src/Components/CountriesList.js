import {Component} from 'react';
import countries from "../countries.json"
import { Link } from 'react-router-dom'



class CountriesList extends Component {
    state = {
      countries: [...countries]
    };
  
    render() {
      return (
        <div className="list-group">
          {this.state.countries.map((country) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
                key={country.cca3}
              >               
                <img
                  className="pe-2"
                  style={{ width: '25px', height: 'auto' }}
                  src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                  alt={`Flag of ${country.name.common}`}
                />
                {country.name.common}
              </Link>
            );
          })}
        </div>
      );
    }
  }
export default CountriesList